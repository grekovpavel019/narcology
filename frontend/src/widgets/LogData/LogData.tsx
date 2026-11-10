import React, { useState } from "react";

import Title from "@/shared/components/typography/Title";
import LogDataFilters from "@/features/log-data-filters";
import LogDataTable from "@/entities/LogFilters";
import type { LogDataFormState } from "@/features/log-data-filters/model/types";

import styles from "./LogData.module.scss";
import { useLogs } from "@/entities/LogFilters/model/useLogs";
import API from "@/shared/api/api";

const LogData = (): React.JSX.Element => {

    const [logDataFilters, setLogDataFilters] = useState<LogDataFormState>({
        action: "all",
        sort: "action",
        order: "asc"
    });

    const { logs, setLogs } = useLogs();

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const res = await API.getLogs(logDataFilters);
        setLogs(res.data)
    }

    return (
        <section className={styles.content}>
            <Title variant="h3">Журнал действий</Title>

            <LogDataFilters 
                value={logDataFilters}
                onChange={setLogDataFilters}
                onSubmit={onSubmit}
            />

            <LogDataTable 
                logs={logs}
            />
        </section>
    );
};

export default LogData;