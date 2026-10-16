import React, { useEffect, useState, useRef } from "react";

import type { SelectProps } from "../model/types";

import styles from "./Select.module.scss";

const Select = <T extends string>(props:  SelectProps<T>): React.JSX.Element => {

    const {
        options,
        value,
        onChange
    } = props;

    const currentOption = options.find(option => option.value === value)
    
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {

        const handleClickOutside = (event: MouseEvent) => {
            if (            
                selectRef.current && 
                !selectRef!.current.contains(event.target as Node) // проверяем что клик произошел не на select
            ) setIsOpen(false);
        }

        document.addEventListener("click", handleClickOutside)

        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, []);

    const handleSelect = (nextValue: T) => {
        setIsOpen(false);
        onChange(nextValue);
    };

    return (
        <div ref={selectRef} className={styles.sort}>
            <button 
                className={styles.sort__button}
                onClick={() => setIsOpen(prev => !prev)}>
                { currentOption?.label }
            </button>

            {
                <div className={`${styles.sort__dropdown} ${isOpen ? styles.visible : ""}`}>
                    {
                        options.map((option) => {
                            return (
                                <button
                                    key={option.value}
                                    onClick={() => handleSelect(option.value)}
                                    className={`${styles.sort__button} ${value === option.value ? styles.active : ""}`}
                                >
                                    {option.label}
                                </button>
                            )
                        })
                    }
                </div>
            }
        </div>
    );
};

export default Select;