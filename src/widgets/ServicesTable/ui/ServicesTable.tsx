import React, { type FC } from "react";

import Select from "@/shared/components/Select";
import Title from "@/shared/components/typography/Title";
import CheckItem from "@/shared/components/CheckItem";

import styles from "./ServicesTable.module.scss";

import type { Filters } from "@/shared/types/Service";
import { useSort } from "../hooks/useSort";
import { useFilters } from "../hooks/useFilters";

import { services } from "@/shared/constants/services";
import { categoryFilters, audienceFilters, formatFilters } from "@/shared/constants/filters";

const ServicesTable: FC = (): React.JSX.Element => {
    
    const {
        filters,
        filteredServices,

        handleInputChange,
        isFilterNotAvailable,
        resetFilters
        
    } = useFilters({ services })
    const {
        sort,
        sortedServices,

        setSort,
        resetSort

    } = useSort({ services: filteredServices });

    const totalServices: number = sortedServices.length;

    return (
        <section className={styles.servicesTable}>
            <div className={`${styles.servicesTable__inner} container`}>

                <div className={styles.servicesTable__filters}>
                    <div className={styles.filters__head}>
                        <Title variant="h3">Фильтры</Title>
                        <button 
                            className={styles.reset__filters} 
                            onClick={() => {
                                resetFilters();
                                resetSort()
                            }}
                        >
                            Сбросить фильтры
            
                        </button>

                    </div>
                
                    <div className={styles.filters__grid}>
                        <div className={`${styles["filter-item"]}`}>
                            <Title variant="h4">Направление</Title>
                            {
                                categoryFilters.map(item => {

                                    const id = item.id;
                                    const group = item.group as keyof Filters;
                                    const value = item.value;

                                    return ( 
                                        <CheckItem
                                            id={id}
                                            key={id}
                                            isChecked={filters[group].includes(value)}
                                            isDisabled={isFilterNotAvailable(group, value)}
                                            onChange={() => handleInputChange(group, value)}
                                        >
                                            {value}
                                        </CheckItem>
                                    )
                                })
                            }
                            
                        </div>
                        <div className={`${styles["filter-item"]}`}>
                            <Title variant="h4">Для кого</Title>
                            {
                                audienceFilters.map(item => {

                                    const id = item.id;
                                    const group = item.group as keyof Filters;
                                    const value = item.value;

                                    return ( 
                                        <CheckItem
                                            id={id}
                                            key={id}
                                            isChecked={filters[group].includes(value)}
                                            isDisabled={isFilterNotAvailable(group, value)}
                                            onChange={() => handleInputChange(group, value)}
                                        >
                                            {value}
                                        </CheckItem>
                                    )
                                })
                            }
                        </div>
                        <div className={`${styles["filter-item"]}`}>
                            <Title variant="h4">Формат помощи</Title>
                            {
                                formatFilters.map(item => {

                                    const id = item.id;
                                    const group = item.group as keyof Filters;
                                    const value = item.value;

                                    return ( 
                                        <CheckItem
                                            id={id}
                                            key={id}
                                            isChecked={filters[group].includes(value)}
                                            isDisabled={isFilterNotAvailable(group, value)}
                                            onChange={() => handleInputChange(group, value)}
                                        >
                                            {value}
                                        </CheckItem>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className={styles["active-filters"]}>
                        {
                            Object.entries(filters).map(([group, value]) => (
                                value.map((value) => (
                                    <span key={value} className={`${styles.accent} ${styles["current-filter"]}`}>
                                        {value}
                                        <button 
                                            onClick={() => handleInputChange(group as keyof Filters, value)} 
                                        >
                                            ×
                                        </button>
                                    </span>

                                ))
                            ))
                        }
                    </div>
                </div>


                <div className={styles.servicesTable__info}>

                    <span>
                        Найдено услуг: <b>{totalServices}</b>
                    </span>

                    <Select 
                        setOption={setSort}
                        option={sort}
                    />
                </div>

                <div className={styles["table-scroll"]}>
                    <table className={styles["table-content"]}>
                        <thead>
                            <tr className={styles["row-head"]}>
                                <th className={styles["col-id"]}>Номер</th>
                                <th className={styles["col-desc"]}>Описание</th>
                                <th className={styles["col-cat"]}>Категория</th>
                                <th className={styles["col-format"]}>Направление</th>
                                <th className={styles["col-price"]}>Цена</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                totalServices > 0 ?
                                sortedServices.map(serv => (
                                    <tr key={serv.id}>
                                        <td className={styles["col-id"]}>{serv.id}</td>
                                        <td className={styles["col-desc"]}>{serv.description}</td>
                                        <td className={styles["col-cat"]}> <span className={styles.accent}>{serv.category}</span></td>
                                        <td className={styles["col-format"]}><span className={styles.accent}>{serv.format}</span></td>
                                        <td className={styles["col-price"]}>{serv.price} р.</td>
                                    </tr>
                                ))
                                :
                                <tr className={styles["empty-message"]}>
                                    <td colSpan={5}>
                                        Ничего не найдено
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        </section>
    );
};

export default ServicesTable;