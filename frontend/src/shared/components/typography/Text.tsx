import React, { type FC } from "react";

import styles from "./Typography.module.scss";

type TextProps = {
    children: string;
}

const Text: FC<TextProps> = (props: TextProps): React.JSX.Element => {
    
    const {
        children
    } = props;

    return (
        <p className={styles.text}>
            {children}
        </p>
    );
};

export default Text;