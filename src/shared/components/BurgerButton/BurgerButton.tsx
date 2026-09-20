import React, { type FC } from "react";

import type { BurgerButtonProps } from "@/shared/types/Button";

import BurgerIcon from "@/shared/icons/BurgerIcon";
import PlusIcon from "@/shared/icons/PlusIcon";

import styles from "./BurgerButton.module.scss";

const BurgerButton: FC<BurgerButtonProps> = (props: BurgerButtonProps): React.JSX.Element => {

    const {
        isOpen,
        onClick
    } = props;

    return (
        <button 
            className={styles.burgerButton}
            onClick={onClick}
        >
            { isOpen ? ( 
                <div className={`${styles.iconArea} ${styles.cross}`}>
                    <PlusIcon />
                </div>
            ) : (
                <div className={styles.iconArea}>
                    <BurgerIcon /> 
                </div>
            )}
        </button>
    );
};

export default BurgerButton;