import React, { type FC } from "react";

import type { Service } from "../model/types";

import ServiceCell from "./ServiceCell";

import styles from "./ServicesTable.module.scss";

type ServicesTableProps = {
    services: Service[];
    // Содержимое колонки «Действия» для услуги (редактирование, удаление).
    // Публичная таблица её не передаёт, и колонка не показывается
    renderActions?: (service: Service) => React.ReactNode;
}

const ServicesTable: FC<ServicesTableProps> = (props: ServicesTableProps): React.JSX.Element => {

    const {
        services,
        renderActions
    } = props;

    const columnsCount = renderActions ? 6 : 5;

    return (
        <div className={styles["table-scroll"]}>
            <table className={styles["table-content"]}>
                <thead>
                    <tr className={styles["row-head"]}>
                        <th className={styles["col-id"]}>Номер</th>
                        <th className={styles["col-desc"]}>Описание</th>
                        <th className={styles["col-cat"]}>Направление</th>
                        <th className={styles["col-format"]}>Формат помощи</th>
                        <th className={styles["col-price"]}>Цена</th>
                        {renderActions && <th className={styles["col-actions"]}>Действия</th>}
                    </tr>
                </thead>

                <tbody>
                    {
                        services.length > 0 ?
                        services.map(service => (
                            <ServiceCell
                                key={service.id}
                                service={service}
                                actions={renderActions?.(service)}
                            />
                        ))
                        :
                        <tr className={styles["empty-message"]}>
                            <td colSpan={columnsCount}>
                                Ничего не найдено
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ServicesTable;
