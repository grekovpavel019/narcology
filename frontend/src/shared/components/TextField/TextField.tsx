import React, { type ComponentPropsWithRef, useId } from "react";

import styles from "./TextField.module.scss";

type TextFieldProps = Omit<ComponentPropsWithRef<"input">, "id"> & {
    label: string;
    error?: string;
    endSlot?: React.ReactNode;
    hint?: string;
}

const TextField = (props: TextFieldProps): React.JSX.Element => {
    const {
        label,
        error,
        endSlot,
        hint,
        ...inputProps
    } = props;

    const id = useId();
    const errorId = `${id}-error`

    return (
        <div className={styles.text__field}>

            <div className={styles.control}>
                <label 
                    htmlFor={id}
                    className={styles.label}
                    >
                    {label}
                </label>

                { endSlot }
            </div>
            
            <input 
                id={id}
                {...inputProps}
                className={styles.input}
            />

            <p className={styles.hint}>
                { hint }
            </p>

            <p
                className={styles.error}
                id={errorId}
            >
                { error }
            </p>
        </div>
    );
};

export default TextField;