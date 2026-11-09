import React from "react";

import StatisticsFilters from "@/features/statistics-filters";
import Title from "@/shared/components/typography/Title";
import { useState } from "react";

import type { StatiscticsFiltersFormState } from "@/features/statistics-filters/model/types";
import StatisticsTable from "@/entities/StatisticsFilters";

import styles from "./Statistics.module.scss"

const Statisctics = (): React.JSX.Element => {

    const [statisticsFilters, setStatisticsFilters] = useState<StatiscticsFiltersFormState>({
        groupBy: "day",
        action: "all",
        order: "asc"
    });

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(statisticsFilters)
    }

    return (
        <section>
            <Title variant="h3">Общая статистика</Title>
            <div className={styles.content}>
                <StatisticsFilters 
                    value={statisticsFilters}
                    onChange={setStatisticsFilters}
                    onSubmit={onSubmit}
                />

                <StatisticsTable />
            </div>
        </section>
    );
};

export default Statisctics;