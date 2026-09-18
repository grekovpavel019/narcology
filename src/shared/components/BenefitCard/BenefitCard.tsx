import React, { type FC } from "react";

import styles from "./BenefitCard.module.scss";

type BenefitCardProps = {
    title: string,
    children: string,
    icon: React.ReactNode
}

const BenefitCard: FC<BenefitCardProps> = (props: BenefitCardProps): React.JSX.Element => {

    const {
        title,
        children,
        icon
    } = props;

    return (
        <div className={styles.card}>
            <div className={styles.icon}>
                {icon}
            </div>
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    );
};

export default BenefitCard;