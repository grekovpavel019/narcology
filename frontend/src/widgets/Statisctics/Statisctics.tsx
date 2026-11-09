import React from "react";

import StatisticsFilters from "@/features/statistics-filters";
import Title from "@/shared/components/typography/Title";
import { useState } from "react";

import type { StatiscticsFiltersFormState } from "@/features/statistics-filters/model/types";
import StatisticsTable from "@/entities/StatisticsFilters";

import styles from "./Statistics.module.scss"
import API from "@/shared/api/api";
import { useStatistics } from "@/entities/StatisticsFilters/model/useStatistics";

const Statisctics = (): React.JSX.Element => {

    const [statisticsFilters, setStatisticsFilters] = useState<StatiscticsFiltersFormState>({
        groupBy: "day",
        action: "all",
        order: "asc"
    });

    const { statistics, setStatistics } = useStatistics();

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const res = await API.getStatistics(statisticsFilters);
        setStatistics(res.data);

        console.log("API response:", res);
        console.log("Is array:", Array.isArray(res.data));
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

                <StatisticsTable 
                    statistics={statistics}
                />
            </div>
        </section>
    );
};

export default Statisctics;