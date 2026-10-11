import React from "react";

import styles from "./InputField.module.scss";

type InputFieldProps = {
    children: React.ReactNode;
    errors?: string;
}

const InputField = (props: InputFieldProps): React.JSX.Element => {
    const {
        children,
        errors
    } = props;

    return (
        <div className={styles.input__field}>
            {children}

            {errors ?? <span>{errors}</span>}
        </div>
    );
};

export default InputField;