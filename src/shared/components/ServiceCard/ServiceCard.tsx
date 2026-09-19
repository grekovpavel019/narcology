import React, { type FC } from "react";

import styles from "./ServiceCard.module.scss";

type ServiceCardProps = {
    title: string,
    children: string,
    icon: React.ReactNode,
    who: string
}

const ServiceCard: FC<ServiceCardProps> = (props: ServiceCardProps): React.JSX.Element => {

    const {
        title,
        children,
        icon,
        who
    } = props;

    return (
        <div className={styles.card}>
            <div className={styles.icon}>
                {icon}
            </div>
            <h3>{title}</h3>
            <p>{children}</p>
            <div className={styles.who}>
                <b>Кому подходит: </b>
                {who}
            </div>
        </div>
    );
};

export default ServiceCard;