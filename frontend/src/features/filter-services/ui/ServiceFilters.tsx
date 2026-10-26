import React, { type FC } from "react";

import {
    SERVICE_AUDIENCES,
    SERVICE_CATEGORIES,
    SERVICE_FORMATS
} from "@/entities/Service";

import Title from "@/shared/components/typography/Title";
import CheckItem from "@/shared/components/CheckItem";

import type { ServiceFilterGroup, ServiceFilterOption, ServiceFilterValues } from "../model/types";

import styles from "./ServiceFilters.module.scss";

type ServiceFiltersProps = {
    filters: ServiceFilterValues;
    onToggle: <G extends ServiceFilterGroup>(group: G, value: ServiceFilterOption<G>) => void;
    isOptionDisabled: <G extends ServiceFilterGroup>(group: G, value: ServiceFilterOption<G>) => boolean;
    onReset: () => void;
}

type FilterGroupProps<G extends ServiceFilterGroup> = Pick<
    ServiceFiltersProps,
    "filters" | "onToggle" | "isOptionDisabled"
> & {
    group: G;
    title: string;
    options: readonly ServiceFilterOption<G>[];
}

const FilterGroup = <G extends ServiceFilterGroup>(props: FilterGroupProps<G>): React.JSX.Element => {

    const {
        group,
        title,
        options,
        filters,
        onToggle,
        isOptionDisabled
    } = props;

    const selected: readonly ServiceFilterOption<G>[] = filters[group];

    return (
        <div className={styles["filter-item"]}>
            <Title variant="h4">{title}</Title>
            {
                options.map((option, index) => (
                    <CheckItem
                        id={`filter-${group}-${index}`}
                        key={option}
                        isChecked={selected.includes(option)}
                        isDisabled={isOptionDisabled(group, option)}
                        onChange={() => onToggle(group, option)}
                    >
                        {option}
                    </CheckItem>
                ))
            }
        </div>
    );
};

const FILTER_GROUPS = ["category", "audience", "format"] as const;

const ServiceFilters: FC<ServiceFiltersProps> = (props: ServiceFiltersProps): React.JSX.Element => {

    const {
        filters,
        onToggle,
        isOptionDisabled,
        onReset
    } = props;

    const groupProps = { filters, onToggle, isOptionDisabled };

    return (
        <div className={styles["service-filters"]}>
            <div className={styles.filters__head}>
                <Title variant="h3">Фильтры</Title>
                <button
                    className={styles.reset__filters}
                    onClick={onReset}
                >
                    Сбросить фильтры
                </button>
            </div>

            <div className={styles.filters__grid}>
                <FilterGroup group="category" title="Направление" options={SERVICE_CATEGORIES} {...groupProps} />
                <FilterGroup group="audience" title="Для кого" options={SERVICE_AUDIENCES} {...groupProps} />
                <FilterGroup group="format" title="Формат помощи" options={SERVICE_FORMATS} {...groupProps} />
            </div>

            <div className={styles["active-filters"]}>
                {
                    FILTER_GROUPS.flatMap(group => (
                        filters[group].map(value => (
                            <span key={`${group}-${value}`} className={`${styles.accent} ${styles["current-filter"]}`}>
                                {value}
                                <button onClick={() => onToggle(group, value)}>
                                    ×
                                </button>
                            </span>
                        ))
                    ))
                }
            </div>
        </div>
    );
};

export default ServiceFilters;
