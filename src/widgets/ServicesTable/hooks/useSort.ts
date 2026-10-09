import{ useState, useEffect } from "react";

import type { Service, SortVariants } from "@/shared/types/Service";

type UseSortProps = {
    services: Service[]
}

export const useSort = (props: UseSortProps) => {
    const {
        services
    } = props;

    // текущий ключ сортировки, который мы получаем из localStorage
    const [sort, setSort] = useState<SortVariants>(() => {

        const savedSort = localStorage.getItem("sort");

        if (savedSort) {
            return savedSort as SortVariants;
        }

        return "default";
    });

    // запись в localStorage
    useEffect(() => {
        localStorage.setItem("sort", sort);
    }, [sort]);

    let sortedServices: Service[];;

    // сама функция сортировки, которая возвращает нужный массив в зависимости от ключа
    switch (sort) {
        case "default": {
            sortedServices = services;
            break;
        }

        case "expensive": {
            sortedServices = [...services].sort((a, b) => b.price - a.price);
            break;
        }

        case "cheap": {
            sortedServices = [...services].sort((a, b) => a.price - b.price);
            break;
        }
        
        case "alphabet": {
            sortedServices = [...services].sort((a, b) => a.description.localeCompare(b.description));
            break;
        }
    }

    const resetSort = () => {
        setSort("default");
    }

    return {
        sort,
        sortedServices,

        setSort,
        resetSort
    }
};