import React, { type FC} from "react";

import styles from "./CheckItem.module.scss";

type CheckItemProps = {
    children: string,
    onChange: () => void;
    id: string;
    isDisabled: boolean;
    isChecked: boolean;
}

const CheckItem: FC<CheckItemProps> = (props: CheckItemProps): React.JSX.Element => {

    const {
        children,
        isDisabled,
        isChecked,
        id,

        onChange
    } = props;


    const handleInputChange = () => {
        if (isDisabled) return;

        onChange();
    }

    return (
        <label 
            className={
                `${styles.check} 
                ${isDisabled ? styles.disabled : ""} 
                ${isChecked && !isDisabled ? styles.checked : ""}`
            } 
            htmlFor={id}>
            <input onChange={handleInputChange} type="checkbox" id={id}/>
            {children}
        </label>
    );
};

export default CheckItem;