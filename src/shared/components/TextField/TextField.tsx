import React, { type ComponentPropsWithRef, useId } from "react";

import styles from "./TextField.module.scss";

type TextFieldProps = Omit<ComponentPropsWithRef<"input">, "id"> & {
    label: string;
    error?: string;
}

const TextField = (props: TextFieldProps): React.JSX.Element => {
    const {
        label,
        error,
        ...inputProps
    } = props;

    const id = useId();
    const errorId = `${id}-error`

    return (
        <div className={styles.text__field}>
            <label 
                htmlFor={id}
                className={styles.label}
            >
                {label}
            </label>
            
            <input 
                id={id}
                {...inputProps}
                className={styles.input}
            />

            {error && (
                <p
                    className={styles.error}
                    id={errorId}
                >
                        {error}
                </p>
            )}
        </div>
    );
};

export default TextField;