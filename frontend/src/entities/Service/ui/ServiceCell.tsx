import React, { type FC } from "react";

import type { Service } from "../model/types";

import styles from "./ServicesTable.module.scss";

type ServiceCellProps = {
    service: Service;
    // Ячейка с действиями над услугой. Если не передана, колонки действий нет
    actions?: React.ReactNode;
}

const ServiceCell: FC<ServiceCellProps> = (props: ServiceCellProps): React.JSX.Element => {

    const {
        service,
        actions
    } = props;

    const { id, description, category, format, price } = service;

    return (
        <tr>
            <td className={styles["col-id"]}>{id}</td>
            <td className={styles["col-desc"]}>{description}</td>
            <td className={styles["col-cat"]}><span className={styles.accent}>{category}</span></td>
            <td className={styles["col-format"]}><span className={styles.accent}>{format}</span></td>
            <td className={styles["col-price"]}>{price} р.</td>
            {actions !== undefined && <td className={styles["actions-cell"]}>{actions}</td>}
        </tr>
    );
};

export default ServiceCell;
