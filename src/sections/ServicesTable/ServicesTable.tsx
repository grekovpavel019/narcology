import React, { type FC } from "react";

import styles from "./ServicesTable.module.scss";

const ServicesTable: FC = (): React.JSX.Element => {
    return (

        <section className={styles.servicesTable}>
            <div className={`${styles.servicesTable__inner} container`}>
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
                            <tr>
                                <td className={styles["col-id"]}>1</td>
                                <td>Консультация</td>
                                <td>2000 рублей</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>
        </section>
    );
};

export default ServicesTable;