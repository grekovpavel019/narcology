import React, { type FC } from "react";

import styles from "./Typography.module.scss";

type TitleVariant = "h1" | "h2" | "h3";

type TitleProps = {
    children: React.ReactNode;
    variant: TitleVariant;
};

const Title: FC<TitleProps> = (props: TitleProps): React.JSX.Element => {

    const {
        children,
        variant
    } = props;

    switch (variant) {
        case "h1":
            return (
                <h1 className={styles.h1}>
                    {children}
                </h1>
            );

        case "h2":
            return (
                <h2 className={styles.h2}>
                    {children}
                </h2>
            )

        case "h3":
            return (
                <h3 className={styles.h3}>
                    {children}
                </h3>
            );
    }
};

export default Title;