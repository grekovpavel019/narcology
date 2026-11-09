import React from "react";

import styles from "./StatisticsTable.module.scss";
import { formatDate } from "@/shared/lib/formatDate";
import type { StatisticsItem } from "../model/types";

type StatisticsTableProps = {
    statistics: StatisticsItem[];
};

const StatisticsTable = (props: StatisticsTableProps): React.JSX.Element => {

    const { statistics } = props;

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
                    {
                        statistics.map((val) => (
                            <tr key={val.period}>
                                <td className={styles["col-period"]}>{formatDate(val.period)}</td>
                                <td className={styles["col-quantity"]}>{val.quantity}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default StatisticsTable;