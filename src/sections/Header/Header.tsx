import React, { useState, useEffect, type FC } from "react";

import { useLocation } from "react-router-dom";

import NavLinkButton from "@/shared/components/NavLinkButton";
import BurgerButton from "@/shared/components/BurgerButton";
import LinkButton from "@/shared/components/LinkButton";

import styles from "./Header.module.scss";

const Header: FC = (): React.JSX.Element => {

    // состояние открытого окна
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // каждый раз при изменении URL, мы будем закрывать mobile menu
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname])

    return (
        <header className={styles.header}>
            <div className={`container ${styles.header__inner}`}>
                <div className={styles.logo}>
                    Алкоклиник
                </div>

                <nav className={styles.mainNav}>
                    <NavLinkButton variant="navLinkButton" to="/">Главная</NavLinkButton>
                    <NavLinkButton variant="navLinkButton" to="/about">О клинике</NavLinkButton>
                    <NavLinkButton variant="navLinkButton" to="/services">Услуги</NavLinkButton>
                </nav>

                <div className={styles.buttonArea}>
                    <LinkButton variant="primaryButton" to="/contacts">Получить консультацию</LinkButton>
                </div>

                <div className={styles.burgerButtonArea}>
                    <BurgerButton 
                        isOpen={isMenuOpen}
                        onClick={() => setIsMenuOpen(prev => !prev)}
                    />
                </div>
            </div>
            
            {/* Добавляем класс отображения меню (с анимацией) если меню открыто */}
            <div className={`${styles.mobileMenu} ${
                isMenuOpen ? styles.open : ""
            }`}>
                <NavLinkButton variant="navLinkButton" to="/">Главная</NavLinkButton>
                <NavLinkButton variant="navLinkButton" to="/about">О клинике</NavLinkButton>
                <NavLinkButton variant="navLinkButton" to="/services">Услуги</NavLinkButton>
                <NavLinkButton variant="navLinkButton" to="/contacts">Получить консультацию</NavLinkButton>
            </div>
            
        </header>
    );
};

export default Header;