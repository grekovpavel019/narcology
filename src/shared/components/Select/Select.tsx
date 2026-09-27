import React, { type FC, useEffect, useState, useRef, type SyntheticEvent, type MouseEventHandler } from "react";

import styles from "./Select.module.scss";

const Select: FC = (): React.JSX.Element => {

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("По умолчанию")
    
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
        
        setSelected(target.textContent.trim());
        setIsOpen(false);

    };

    return (
        <div ref={selectRef} className={styles.sort}>
            <button 
                className={styles.sort__button}
                onClick={() => setIsOpen(prev => !prev)}>
                {selected}
            </button>

            {
                <div className={`${styles.sort__dropdown} ${isOpen ? styles.visible : ""}`}>
                    <button 
                        onClick={handleSelect} 
                        value={"default"} 
                        className={`${styles.sort__button} ${selected.trim() === "По умолчанию" ? styles.active : ""}`}
                    >
                            По умолчанию
                    </button>
                    <button 
                        onClick={handleSelect} 
                        value={"expensive"} 
                        className={`${styles.sort__button} ${selected.trim() === "Сначала дорогие" ? styles.active : ""}`}
                    >
                            Сначала дорогие
                    </button>
                    <button 
                        onClick={handleSelect} 
                        value={"cheap"} 
                        className={`${styles.sort__button} ${selected.trim() === "Сначала дешевые" ? styles.active : ""}`}
                    >
                            Сначала дешевые
                    </button>
                    <button 
                        onClick={handleSelect} 
                        value={"alphabet"} 
                        className={`${styles.sort__button} ${selected.trim() === "По алфавиту" ? styles.active : ""}`}
                    >
                            По алфавиту
                    </button>
                </div>
            }
        </div>
    );
};

export default Select;