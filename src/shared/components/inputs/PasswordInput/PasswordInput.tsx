import React, { type FC } from "react";

import styles from "./PasswordInput.module.scss";

type PasswordInputProps = {
    id: string;
}

const PasswordInput: FC<PasswordInputProps> = ({ id }: PasswordInputProps): React.JSX.Element => {
    return (
        <input 
            type="password"
            id={id}
            className={styles.input}
        />
    );
};

export default PasswordInput;