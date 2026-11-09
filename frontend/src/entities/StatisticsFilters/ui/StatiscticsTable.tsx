import React from "react";

import styles from "./StatisticsTable.module.scss";

const StatisticsTable = (): React.JSX.Element => {
    return (
        <div className={styles["table-scroll"]}>
            <table className={styles["table-content"]}>
                <thead>
                    <tr>
                        <th scope="col">Период</th>
                        <th scope="col">Количество</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className={styles["col-period"]}>22.08.22</td>
                        <td className={styles["col-quantity"]}>10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default StatisticsTable;