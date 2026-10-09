import { useState, useEffect } from "react";

import type { Filters, Service } from "@/shared/types/Service";

type UseFiltersProps = {
    services: Service[]
}

export const useFilters = (props: UseFiltersProps) => {

    const {
        services
    } = props;

    // обычный объект выбранных фильтров
    const [filters, setFilters] = useState<Filters>(() => {
        const savedFiltes = localStorage.getItem("filters");

        if (savedFiltes) {
            return JSON.parse(savedFiltes);
        }

        return {
            category: [],
            audience: [],
            format: []
        };
    });

    useEffect(() => {
        localStorage.setItem("filters", JSON.stringify(filters))
    }, [filters])

    const handleInputChange = (
        type: keyof Filters,
        value: string
    ) => {
        setFilters(prev => {

            const values = prev[type];

            return {
                ...prev,
                [type]: values.includes(value) 
                    ? values.filter(item => item !== value) 
                    : [...values, value]
            }
        });
    }

    const matchesFilters = (service: Service, filters: Filters) => {

        // истина если: массив категорий пуст (иначе тогда фильтры не имеют смысла)
        // или выбранный фильтр включает в себя ТЭГ (описание) какой-то услуги
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
    }

    const filteredServices = services.filter((service) => matchesFilters(service, filters));

    const isFilterNotAvailable = (
        type: keyof Filters,
        value: string
    ) => {

        // создадим временный фильтр
        const tempFilters = {
            ...filters,
            [type]: [value]
        }

        // проверяем: есть ли шанс на то, 
        // что хотя бы одна услуга существует при уже выбранных (...filters) плюс наш [type]: [value]
        return ( 
            !services.some((service) => matchesFilters(service, tempFilters)) 
            && !filters[type].includes(value) // и наш фильтр уже не находиться в активных
        ); 
    }

    const resetFilters = () => {
        setFilters({
            format: [], 
            category: [], 
            audience: []
        });
    }
    
    return {
        filters,
        filteredServices,

        handleInputChange,
        isFilterNotAvailable,
        resetFilters
    }
};