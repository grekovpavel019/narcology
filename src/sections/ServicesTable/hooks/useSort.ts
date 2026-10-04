import React from "react";

export const useSort = ( ) => {
    const [sort, setSort] = useState<sortVariants>(() => {
    const savedSort = localStorage.getItem("sort");

        if (savedSort) {
            return savedSort as sortVariants;
        }

        return "default";
    });

    useEffect(() => {
        localStorage.setItem("sort", sort);
    }, [sort]);

    let sortedServices: Service[];;

    switch (sort) {
        case "default": {
            sortedServices = filteredServices;
            break;
        }

        case "expensive": {
            sortedServices = [...filteredServices].sort((a, b) => b.price - a.price);
            break;
        }

        case "cheap": {
            sortedServices = [...filteredServices].sort((a, b) => a.price - b.price);
            break;
        }
        
        case "alphabet": {
            sortedServices = [...filteredServices].sort((a, b) => a.description.localeCompare(b.description));
            break;
        }
    }
};