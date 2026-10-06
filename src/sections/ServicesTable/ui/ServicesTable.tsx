import React, { type FC } from "react";

import Select from "@/shared/components/Select";
import Title from "@/shared/components/typography/Title";
import CheckItem from "@/shared/components/CheckItem";

import styles from "./ServicesTable.module.scss";

import type { Filters, Service } from "@/shared/types/Service";
import { useSort } from "../hooks/useSort";
import { useFilters } from "../hooks/useFilters";


const services: Service[] = [
    {
        id: 1,
        description: "Первичная консультация нарколога",
        price: 2000,
        category: "Консультация",
        audience: "Пациент",
        format: "В клинике",
        sub: "Оценка состояния и составление плана помощи"
    },
    {
        id: 2,
        description: "Повторная консультация нарколога",
        price: 1500,
        category: "Консультация",
        audience: "Пациент",
        format: "В клинике",
        sub: "Контроль динамики лечения"
    },
    {
        id: 3,
        description: "Консультация для родственников",
        price: 2000,
        category: "Консультация",
        audience: "Родственники",
        format: "В клинике",
        sub: "Рекомендации по взаимодействию с пациентом"
    },
    {
        id: 4,
        description: "Семейная консультация",
        price: 3500,
        category: "Консультация",
        audience: "Родственники",
        format: "В клинике",
        sub: "Разбор семейной ситуации и дальнейших шагов"
    },
    {
        id: 5,
        description: "Консультация психолога",
        price: 3000,
        category: "Консультация",
        audience: "Пациент",
        format: "Амбулаторно",
        sub: "Индивидуальная работа со специалистом"
    },
    {
        id: 6,
        description: "Выезд специалиста на дом",
        price: 3500,
        category: "Консультация",
        audience: "Пациент",
        format: "На дому",
        sub: "Первичная оценка состояния дома"
    },
    {
        id: 7,
        description: "Экстренная консультация на дому",
        price: 4500,
        category: "Консультация",
        audience: "Пациент",
        format: "На дому",
        sub: "Выезд специалиста при необходимости"
    },
    {
        id: 8,
        description: "Оценка состояния перед лечением",
        price: 1800,
        category: "Консультация",
        audience: "Пациент",
        format: "В клинике",
        sub: "Подготовка к дальнейшей программе"
    },
    {
        id: 9,
        description: "Капельница при алкогольной интоксикации",
        price: 4500,
        category: "Детоксикация",
        audience: "Пациент",
        format: "На дому",
        sub: "Медицинская помощь на дому"
    },
    {
        id: 10,
        description: "Выездная детоксикация на дому",
        price: 5500,
        category: "Детоксикация",
        audience: "Пациент",
        format: "На дому",
        sub: "Комплексная помощь с наблюдением"
    },
    {
        id: 11,
        description: "Комплексная детоксикация",
        price: 6500,
        category: "Детоксикация",
        audience: "Пациент",
        format: "В стационаре",
        sub: "Медицинское сопровождение в клинике"
    },
    {
        id: 12,
        description: "Прерывание запоя на дому",
        price: 6000,
        category: "Детоксикация",
        audience: "Пациент",
        format: "На дому",
        sub: "Выездная медицинская помощь"
    },
    {
        id: 13,
        description: "Прерывание запоя в стационаре",
        price: 6000,
        category: "Детоксикация",
        audience: "Пациент",
        format: "В стационаре",
        sub: "Наблюдение медицинского персонала"
    },
    {
        id: 14,
        description: "Наблюдение врача после детоксикации",
        price: 2500,
        category: "Детоксикация",
        audience: "Пациент",
        format: "Амбулаторно",
        sub: "Контроль состояния после процедуры"
    },
    {
        id: 15,
        description: "Кодирование от алкоголя",
        price: 8000,
        category: "Лечение",
        audience: "Пациент",
        format: "В клинике",
        sub: "Метод лечения определяется после консультации"
    },
    {
        id: 16,
        description: "Медикаментозное лечение алкогольной зависимости",
        price: 12000,
        category: "Лечение",
        audience: "Пациент",
        format: "Амбулаторно",
        sub: "Индивидуальная схема под наблюдением врача"
    },
    {
        id: 17,
        description: "Комплексная программа лечения",
        price: 25000,
        category: "Лечение",
        audience: "Пациент",
        format: "В стационаре",
        sub: "Комплексное медицинское сопровождение"
    },
    {
        id: 18,
        description: "Подготовка к лечению зависимости",
        price: 4000,
        category: "Лечение",
        audience: "Пациент",
        format: "В клинике",
        sub: "Диагностика и подготовительный этап"
    },
    {
        id: 19,
        description: "Психологическая поддержка в период лечения",
        price: 3000,
        category: "Лечение",
        audience: "Пациент",
        format: "Амбулаторно",
        sub: "Регулярные встречи со специалистом"
    },
    {
        id: 20,
        description: "Индивидуальная психотерапевтическая сессия",
        price: 3500,
        category: "Лечение",
        audience: "Пациент",
        format: "В клинике",
        sub: "Персональная работа с психологом"
    },
    {
        id: 21,
        description: "Семейная психотерапевтическая сессия",
        price: 4000,
        category: "Лечение",
        audience: "Родственники",
        format: "В клинике",
        sub: "Работа с отношениями и поддержкой пациента"
    },
    {
        id: 22,
        description: "Реабилитационная программа",
        price: 15000,
        category: "Реабилитация",
        audience: "Пациент",
        format: "В стационаре",
        sub: "Базовый курс восстановления"
    },
    {
        id: 23,
        description: "Расширенная программа реабилитации",
        price: 30000,
        category: "Реабилитация",
        audience: "Пациент",
        format: "В стационаре",
        sub: "Продолжительная программа восстановления"
    },
    {
        id: 24,
        description: "Сопровождение после завершения лечения",
        price: 2500,
        category: "Реабилитация",
        audience: "Пациент",
        format: "Амбулаторно",
        sub: "Поддержка на этапе возвращения к обычной жизни"
    },
    {
        id: 25,
        description: "Контрольная консультация после лечения",
        price: 1800,
        category: "Реабилитация",
        audience: "Пациент",
        format: "В клинике",
        sub: "Оценка состояния и дальнейших рекомендаций"
    },
    {
        id: 26,
        description: "План профилактики рецидива",
        price: 3000,
        category: "Реабилитация",
        audience: "Пациент",
        format: "Амбулаторно",
        sub: "Персональные рекомендации после лечения"
    },
    {
        id: 27,
        description: "Консультация родственников по восстановлению",
        price: 2500,
        category: "Реабилитация",
        audience: "Родственники",
        format: "В клинике",
        sub: "Поддержка семьи после основного лечения"
    },
    {
        id: 28,
        description: "Сопровождение пациента в период восстановления",
        price: 3000,
        category: "Реабилитация",
        audience: "Сопровождающий",
        format: "Амбулаторно",
        sub: "Помощь с соблюдением рекомендаций"
    },
    {
        id: 29,
        description: "Стационарная программа восстановления",
        price: 20000,
        category: "Реабилитация",
        audience: "Пациент",
        format: "В стационаре",
        sub: "Проживание и комплексное сопровождение"
    },
    {
        id: 30,
        description: "Индивидуальная программа поддержки",
        price: 5000,
        category: "Реабилитация",
        audience: "Сопровождающий",
        format: "Амбулаторно",
        sub: "План поддержки на период восстановления"
    }
];

const categoryFilters = [
    {
        id: "consultation",
        group: "category",
        value: "Консультация",
    },
    {
        id: "detox",
        group: "category",
        value: "Детоксикация",
    },
    {
        id: "treatment",
        group: "category",
        value: "Лечение",
    },
    {
        id: "rehabilitation",
        group: "category",
        value: "Реабилитация",
    },
];

const audienceFilters = [
    {
        id: "patient",
        group: "audience",
        value: "Пациент",
    },
    {
        id: "relatives",
        group: "audience",
        value: "Родственники",
    },
    {
        id: "companion",
        group: "audience",
        value: "Сопровождающий",
    },
];

const formatFilters = [
    {
        id: "clinic",
        group: "format",
        value: "В клинике",
    },
    {
        id: "home",
        group: "format",
        value: "На дому",
    },
    {
        id: "outpatient",
        group: "format",
        value: "Амбулаторно",
    },
    {
        id: "inpatient",
        group: "format",
        value: "В стационаре",
    },
];

const ServicesTable: FC = (): React.JSX.Element => {
    
    const {
        filters,
        filteredServices,

        handleInputChange,
        isFilterAvailable,
        resetFilters
        
    } = useFilters({ services })
    const {
        sort,
        sortedServices,

        setSort,
        resetSort

    } = useSort({ services: filteredServices });

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
                                            isDisabled={!isFilterAvailable(group, value) && !filters[group].includes(value)}
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
                                            isDisabled={!isFilterAvailable(group, value) && !filters[group].includes(value)}
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
                                            isDisabled={!isFilterAvailable(group, value) && !filters[group].includes(value)}
                                            onChange={() => handleInputChange(group, value)}
                                        >
                                            {value}
                                        </CheckItem>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>


                <div className={styles.servicesTable__info}>

                    <span>
                        Найдено услуг: <b>{filteredServices.length}</b>
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
                                <th className={styles["col-desc"]}>Категория</th>
                                <th className={styles["col-cat"]}>Направление</th>
                                <th className={styles["col-price"]}>Цена</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                sortedServices.map(serv => (
                                    <tr key={serv.id}>
                                        <td className={styles["col-id"]}>{serv.id}</td>
                                        <td className={styles["col-desc"]}>{serv.description}</td>
                                        <td className={styles["col-cat"]}>{serv.category}</td>
                                        <td className={styles["col-format"]}>{serv.format}</td>
                                        <td className={styles["col-price"]}>{serv.price} р.</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        </section>
    );
};

export default ServicesTable;