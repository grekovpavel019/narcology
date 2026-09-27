import React, { type FC } from "react";

import styles from "./ServicesTable.module.scss";

import type { Service } from "@/shared/types/Service";

type ServiceTableProps = {
    services: Service[]
}

const ServicesTable: FC<ServiceTableProps> = (props: ServiceTableProps): React.JSX.Element => {

    const {
        services
    } = props;

    return (
        <section className={styles.servicesTable}>
            <div className={`${styles.servicesTable__inner} container`}>

                <div className={styles["table-hint"]}>
                    <select className={styles["table-sort-select"]} name="tableSortSelect" id="tableSortSelect">
                        <option value="default">По умолчанию</option>
                        <option value="expensive">Сначала дорогие</option>
                        <option value="cheap">Сначала дешевые</option>
                        <option value="alphabet">По алфавиту</option>
                    </select>
                </div>

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
                                services.map(serv => (
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