import { useState, useEffect } from "react";

import {
    SERVICE_AUDIENCES,
    SERVICE_CATEGORIES,
    SERVICE_FORMATS,
    type Service
} from "@/entities/Service";

import type { ServiceFilterGroup, ServiceFilterOption, ServiceFilterValues } from "./types.ts";

const STORAGE_KEY = "filters";

const createEmptyFilters = (): ServiceFilterValues => ({
    category: [],
    audience: [],
    format: []
});

// Оставляет только допустимые значения: в localStorage могли остаться данные старой версии
const pickAllowed = <T extends string>(saved: unknown, allowed: readonly T[]): T[] => {
    if (!Array.isArray(saved)) return [];

    return saved.filter((value): value is T => allowed.includes(value));
};

const readSavedFilters = (): ServiceFilterValues => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);

        if (raw) {
            const saved: Partial<Record<ServiceFilterGroup, unknown>> = JSON.parse(raw);

            return {
                category: pickAllowed(saved.category, SERVICE_CATEGORIES),
                audience: pickAllowed(saved.audience, SERVICE_AUDIENCES),
                format: pickAllowed(saved.format, SERVICE_FORMATS)
            };
        }
    } catch {
        // повреждённый JSON или недоступное хранилище: начинаем с пустых фильтров
    }

    return createEmptyFilters();
};

// пустая группа не ограничивает выбор; иначе услуга должна входить в выбранные значения
const matchesFilters = (service: Service, filters: ServiceFilterValues): boolean => {
    const categoryMatches =
        filters.category.length === 0 ||
        filters.category.includes(service.category);

    const audienceMatches =
        filters.audience.length === 0 ||
        filters.audience.includes(service.audience);

    const formatMatches =
        filters.format.length === 0 ||
        filters.format.includes(service.format);

    return categoryMatches && audienceMatches && formatMatches;
};

export const useServiceFilters = (services: Service[]) => {

    const [filters, setFilters] = useState<ServiceFilterValues>(readSavedFilters);

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(filters));
        } catch {
            // хранилище недоступно: фильтры просто не запомнятся
        }
    }, [filters]);

    const toggleFilter = <G extends ServiceFilterGroup>(
        group: G,
        value: ServiceFilterOption<G>
    ) => {
        setFilters(prev => {
            const values: ServiceFilterOption<G>[] = prev[group];

            return {
                ...prev,
                [group]: values.includes(value)
                    ? values.filter(item => item !== value)
                    : [...values, value]
            };
        });
    };

    const filteredServices = services.filter(service => matchesFilters(service, filters));

    // Значение недоступно, если вместе с уже выбранными фильтрами других групп
    // не найдётся ни одной услуги. Уже выбранное значение недоступным не считается.
    const isOptionDisabled = <G extends ServiceFilterGroup>(
        group: G,
        value: ServiceFilterOption<G>
    ): boolean => {
        const filtersWithOption = {
            ...filters,
            [group]: [value]
        };

        const selected: readonly ServiceFilterOption<G>[] = filters[group];

        return (
            !services.some(service => matchesFilters(service, filtersWithOption)) &&
            !selected.includes(value)
        );
    };

    const resetFilters = () => {
        setFilters(createEmptyFilters());
    };

    return {
        filters,
        filteredServices,

        toggleFilter,
        isOptionDisabled,
        resetFilters
    };
};
