import React from "react";

import styles from "./LogDataTable.module.scss";

import type { LogItem } from "../model/types";

type LogDataTableProps = {
    logs: LogItem[]
}

const LogDataTable = (props: LogDataTableProps): React.JSX.Element => {

    const { logs } = props;

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

                    {
                        logs.map((val) => (
                            <tr key={val.id}>
                                <td>{val.id}</td>
                                <td>{new Date(val.created_at).toLocaleString("ru-RU")}</td>
                                <td>{val.user_id ?? "—"}</td>
                                <td>{val.action}</td>
                                <td>{val.target}</td>
                                <td>{val.ip}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default LogDataTable;