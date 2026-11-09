import React, { type Dispatch, type SetStateAction } from "react";

import Select from "@/shared/components/Select";
import Button from "@/shared/components/Button";

import { groupByOptions } from "@/entities/StatisticsFilters/model/constants";
import { actionOptions } from "@/entities/StatisticsFilters/model/constants";
import { sortOrderOptions } from "@/entities/StatisticsFilters/model/constants";

import type { StatiscticsFiltersFormState } from "../model/types";

type StatiscticsFiltersProps = {
    value: StatiscticsFiltersFormState;
    onChange: Dispatch<SetStateAction<StatiscticsFiltersFormState>>;
}

const StatisticsFilters = (props: StatiscticsFiltersProps): React.JSX.Element => {

    const { value, onChange } = props;

    return (
        <form action="">
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
                value="all"
                onChange={() => console.log()}
            />
            
            <Select 
                options={sortOrderOptions}
                value="asc"
                onChange={() => console.log(1)}
            />

            <Button variant="primaryButton">Показать</Button>
        </form>
    );
};

export default StatisticsFilters;