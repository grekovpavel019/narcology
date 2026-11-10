import React from "react";

import styles from "./LogDataTable.module.scss";

const LogDataTable = (): React.JSX.Element => {
    return (
        <div className={styles["table-scroll"]}>
            <table className={styles["table-content"]}>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Время</th>
                        <th scope="col">User ID</th>
                        <th scope="col">Действие</th>
                        <th scope="col">Цель</th>
                        <th scope="col">IP</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>10.11.2026, 12:00</td>
                        <td>42</td>
                        <td>LOGIN</td>
                        <td>auth</td>
                        <td>192.168.1.1</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>10.11.2026, 12:15</td>
                        <td>15</td>
                        <td>LOGOUT</td>
                        <td>auth</td>
                        <td>192.168.1.2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default LogDataTable;