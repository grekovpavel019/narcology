import React from "react";

import type { Service } from "../model/types";

import styles from "./ServiceCell.module.scss";

const ServiceCell = (props: Omit<Service, "sub" | "audience">): React.JSX.Element => {

    const {
        id,
        description,
        price,
        category,
        format
    } = props;

    return (
        <tr key={id}>
            <td className={styles["col-id"]}>{id}</td>
            <td className={styles["col-desc"]}>{description}</td>
            <td className={styles["col-cat"]}> <span className={styles.accent}>{category}</span></td>
            <td className={styles["col-format"]}><span className={styles.accent}>{format}</span></td>
            <td className={styles["col-price"]}>{price} р.</td>
        </tr>
    );
};

export default ServiceCell;