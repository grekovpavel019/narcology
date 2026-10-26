import { useState, useEffect } from "react";

import type { Service } from "@/entities/Service";

import { SORT_OPTIONS } from "./sortOptions";
import type { ServiceSortKey } from "./types";

const STORAGE_KEY = "sort";

const isSortKey = (value: unknown): value is ServiceSortKey => {
    return SORT_OPTIONS.some(option => option.value === value);
};

const readSavedSort = (): ServiceSortKey => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (isSortKey(saved)) {
            return saved;
        }
    } catch {
        // хранилище недоступно: сортировка по умолчанию
    }

    return "default";
};

const sortServices = (services: Service[], sort: ServiceSortKey): Service[] => {
    switch (sort) {
        case "default":
            return services;

        case "expensive":
            return [...services].sort((a, b) => b.price - a.price);

        case "cheap":
            return [...services].sort((a, b) => a.price - b.price);

        case "alphabet":
            return [...services].sort((a, b) => a.description.localeCompare(b.description));
    }
};

export const useServiceSort = (services: Service[]) => {

    const [sort, setSort] = useState<ServiceSortKey>(readSavedSort);

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, sort);
        } catch {
            // хранилище недоступно: сортировка просто не запомнится
        }
    }, [sort]);

    const sortedServices = sortServices(services, sort);

    const resetSort = () => {
        setSort("default");
    };

    return {
        sort,
        sortedServices,

        setSort,
        resetSort
    };
};
