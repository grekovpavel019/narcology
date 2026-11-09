import React, { type Dispatch, type SetStateAction, type SubmitEventHandler } from "react";

import Select from "@/shared/components/Select";
import Button from "@/shared/components/Button";

import { groupByOptions } from "@/entities/StatisticsFilters/model/constants";
import { actionOptions } from "@/entities/StatisticsFilters/model/constants";
import { sortOrderOptions } from "@/entities/StatisticsFilters/model/constants";

import type { StatiscticsFiltersFormState } from "../model/types";

import styles from "./StatisticsFilters.module.scss";

type StatiscticsFiltersProps = {
    value: StatiscticsFiltersFormState;
    onChange: Dispatch<SetStateAction<StatiscticsFiltersFormState>>;
    onSubmit: SubmitEventHandler<HTMLFormElement>;
}

const StatisticsFilters = (props: StatiscticsFiltersProps): React.JSX.Element => {

    const { value, onChange, onSubmit } = props;

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <Select 
                options={groupByOptions}
                value={value.groupBy}
                onChange={(newValue) => {
                    onChange(prev => ({
                        ...prev,
                        groupBy: newValue
                    }))
                }}
            />

            <Select 
                options={actionOptions}
                value={value.action}
                onChange={(newValue) => {
                    onChange(prev => ({
                        ...prev,
                        action: newValue
                    }))
                }}
            />
            
            <Select 
                options={sortOrderOptions}
                value={value.order}
                onChange={(newValue) => {
                    onChange(prev => ({
                        ...prev,
                        order: newValue
                    }))
                }}
            />

            <Button type="submit" variant="primaryButton">Показать</Button>
        </form>
    );
};

export default StatisticsFilters;