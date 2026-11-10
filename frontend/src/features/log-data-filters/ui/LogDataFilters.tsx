import React, { type Dispatch, type SetStateAction, type SubmitEventHandler } from "react";

import Select from "@/shared/components/Select";
import Button from "@/shared/components/Button";
import type { LogDataFormState } from "../model/types";
import { actionOptions, sortOptions, orderOptions } from "@/entities/LogFilters/model/constants";

import styles from "./LogDataFilters.module.scss"

type LogDataFiltersProps = {
    value: LogDataFormState;
    onChange: Dispatch<SetStateAction<LogDataFormState>>;
    onSubmit: SubmitEventHandler<HTMLFormElement>
}

const LogDataFilters = (props: LogDataFiltersProps): React.JSX.Element => {

    const { value, onChange, onSubmit } = props;

    return (
        <form className={styles.form} onSubmit={onSubmit}>
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
                options={sortOptions}
                value={value.sort}
                onChange={(newValue) => {
                    onChange(prev => ({
                        ...prev,
                        sort: newValue
                    }))
                }}
            />

            <Select
                options={orderOptions}
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

export default LogDataFilters;