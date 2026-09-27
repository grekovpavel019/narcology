import React, { type FC, useState, useEffect } from "react";

import Select from "@/shared/components/Select";

import styles from "./ServicesTable.module.scss";

import type { Service, sortVariants } from "@/shared/types/Service";

const services: Service[] = [
        {
            id: 1,
            description: "Консультация нарколога",
            price: 2000
        },
        {
            id: 2,
            description: "Повторная консультация",
            price: 1500
        },
        {
            id: 3,
            description: "Консультация для родственников",
            price: 2000
        },
        {
            id: 4,
            description: "Выезд специалиста на дом",
            price: 3500
        },
        {
            id: 5,
            description: "Кодирование от алкоголя",
            price: 8000
        },
        {
            id: 6,
            description: "Капельница для снятия алкогольной интоксикации",
            price: 4500
        },
        {
            id: 7,
            description: "Прерывание запоя (в стационаре)",
            price: 6000
        },
        {
            id: 8,
            description: "Психологическая поддержка (сессия)",
            price: 3000
        },
        {
            id: 9,
            description: "Реабилитационная программа (базовый курс)",
            price: 15000
        },
        {
            id: 10,
            description: "Тестирование на содержание алкоголя",
            price: 1200
        }
    ];

const ServicesTable: FC = (): React.JSX.Element => {

    const [sort, setSort] = useState<sortVariants>(() => {
        const savedSort = localStorage.getItem("sort");

        if (savedSort) {
            return savedSort as sortVariants;
        }

        return "default";
    });

    useEffect(() => {
        localStorage.setItem("sort", sort);
    }, [sort]);

    let sortedServices: Service[];

    switch (sort) {
        case "default": {
            sortedServices = services;
            break;
        }

        case "expensive": {
            sortedServices = [...services].sort((a, b) => b.price - a.price);
            break;
        }

        case "cheap": {
            sortedServices = [...services].sort((a, b) => a.price - b.price);
            break;
        }
        
        case "alphabet": {
            sortedServices = [...services].sort((a, b) => a.description.localeCompare(b.description));
            break;
        }
    }

    return (
        <section className={styles.servicesTable}>
            <div className={`${styles.servicesTable__inner} container`}>

                <Select 
                    setOption={setSort}
                    option={sort}
                />

                <div className={styles["table-scroll"]}>
                    <table className={styles["table-content"]}>
                        <thead>
                            <tr className={styles["row-head"]}>
                                <th className={styles["col-id"]}>Номер</th>
                                <th className={styles["col-desc"]}>Описание</th>
                                <th className={styles["col-price"]}>Цена</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                sortedServices.map(serv => (
                                    <tr key={serv.id}>
                                        <td className={styles["col-id"]}>{serv.id}</td>
                                        <td className={styles["col-desc"]}>{serv.description}</td>
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