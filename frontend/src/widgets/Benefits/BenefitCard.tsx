import React, { type FC } from "react";

import Title from "@/shared/components/typography/Title";
import Text from "@/shared/components/typography/Text";

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

            <Title variant="h3">{title}</Title>
            <Text>{children}</Text>
            
        </div>
    );
};

export default BenefitCard;