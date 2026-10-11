import React, { type FC } from "react";

import styles from './Input.module.scss';

type InputProps = {
    type: string;
    id: string;
}

const Input: FC<InputProps> = ({type, id}: InputProps): React.JSX.Element => {
    return (
        <input 
            type={type}
            id={id}
            className={styles.input}
        />
    );
};

export default Input;