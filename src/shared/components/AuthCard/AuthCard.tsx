import React from "react";

import Title from "@/shared/components/typography/Title";
import Text from "@/shared/components/typography/Text";

import styles from "./AuthCard.module.scss";

type AuthCardProps = {
    title: string;
    description: string;

    footer: React.ReactNode;

    children: React.ReactNode;
}

const AuthCard = (props: AuthCardProps): React.JSX.Element => {

    const {
        title,
        description,
        footer,
        children
    } = props;

    return (
        <div className={styles.auth__inner}>
            <div className={styles.auth__intro}>
                <Title variant="h2">{title}</Title>
                <Text>{description}</Text>
            </div>

            {
                children
            }

            <div className={styles.auth__footer}>
                {
                    footer
                }
            </div>
        </div>
    );
};

export default AuthCard;