import React, { type FC, useEffect, useState, useRef } from "react";

import type { sortVariants } from "@/shared/types/Service";

import styles from "./Select.module.scss";

type SelectProps = {
    setOption: (sort: sortVariants) => void;
    option: sortVariants
}

const Select: FC<SelectProps> = (props: SelectProps): React.JSX.Element => {

    const {
        setOption,
        option
    } = props;

    let currentOption: string;

    switch (option) {
        case "default": currentOption = "По умолчанию"; break;
        case "expensive": currentOption = "Сначала дорогие"; break;
        case "cheap": currentOption = "Сначала дешевые"; break;
        case "alphabet": currentOption = "По алфавиту"; break;
    }
    
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

    const handleSelect = (event: React.MouseEvent<HTMLButtonElement>) => {
        const target = event.currentTarget;
        
        setIsOpen(false);

        setOption(target.value as sortVariants);
    };

    return (
        <div ref={selectRef} className={styles.sort}>
            <button 
                className={styles.sort__button}
                onClick={() => setIsOpen(prev => !prev)}>
                { currentOption }
            </button>

            {
                <div className={`${styles.sort__dropdown} ${isOpen ? styles.visible : ""}`}>
                    <button 
                        onClick={handleSelect} 
                        value={"default"} 
                        className={`${styles.sort__button} ${option.trim() === "default" ? styles.active : ""}`}
                    >
                            По умолчанию
                    </button>
                    <button 
                        onClick={handleSelect} 
                        value={"expensive"} 
                        className={`${styles.sort__button} ${option.trim() === "expensive" ? styles.active : ""}`}
                    >
                            Сначала дорогие
                    </button>
                    <button 
                        onClick={handleSelect} 
                        value={"cheap"} 
                        className={`${styles.sort__button} ${option.trim() === "cheap" ? styles.active : ""}`}
                    >
                            Сначала дешевые
                    </button>
                    <button 
                        onClick={handleSelect} 
                        value={"alphabet"} 
                        className={`${styles.sort__button} ${option.trim() === "alphabet" ? styles.active : ""}`}
                    >
                            По алфавиту
                    </button>
                </div>
            }
        </div>
    );
};

export default Select;