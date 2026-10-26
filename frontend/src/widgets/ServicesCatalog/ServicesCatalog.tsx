import React, { type FC } from "react";

import { ServicesTable, type Service } from "@/entities/Service";
import { ServiceFilters, useServiceFilters } from "@/features/filter-services";
import { SORT_OPTIONS, useServiceSort } from "@/features/sort-services";

import Select from "@/shared/components/Select";

import styles from "./ServicesCatalog.module.scss";

type ServicesCatalogProps = {
    services: Service[];
    toolbar?: React.ReactNode;
    renderActions?: (service: Service) => React.ReactNode;
}

const ServicesCatalog: FC<ServicesCatalogProps> = (props: ServicesCatalogProps): React.JSX.Element => {

    const {
        services,
        toolbar,
        renderActions
    } = props;

    const {
        filters,
        filteredServices,

        toggleFilter,
        isOptionDisabled,
        resetFilters
    } = useServiceFilters(services);

    const {
        sort,
        sortedServices,

        setSort,
        resetSort
    } = useServiceSort(filteredServices);

    const handleReset = () => {
        resetFilters();
        resetSort();
    };

    return (
        <section className={styles.catalog}>
            <div className="container">

                {toolbar}

                <ServiceFilters
                    filters={filters}
                    onToggle={toggleFilter}
                    isOptionDisabled={isOptionDisabled}
                    onReset={handleReset}
                />

                <div className={styles.catalog__info}>
                    <span>
                        Найдено услуг: <b>{sortedServices.length}</b>
                    </span>

                    <Select
                        options={SORT_OPTIONS}
                        value={sort}
                        onChange={setSort}
                    />
                </div>

                <ServicesTable
                    services={sortedServices}
                    renderActions={renderActions}
                />

            </div>
        </section>
    );
};

export default ServicesCatalog;
