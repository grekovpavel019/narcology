import React, { useState } from "react";

import Title from "@/shared/components/typography/Title";
import LogDataFilters from "@/features/log-data-filters";
import LogDataTable from "@/entities/LogFilters";
import type { LogDataFormState } from "@/features/log-data-filters/model/types";

import styles from "./LogData.module.scss";

const LogData = (): React.JSX.Element => {

    const [logDataFilters, setLogDataFilters] = useState<LogDataFormState>({
        action: "all",
        sort: "action",
        order: "asc"
    });

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(logDataFilters)
    }

    return (
        <section className={styles.content}>
            <Title variant="h3">Журнал действий</Title>

            <LogDataFilters 
                value={logDataFilters}
                onChange={setLogDataFilters}
                onSubmit={onSubmit}
            />

            <LogDataTable />
        </section>
    );
};

export default LogData;