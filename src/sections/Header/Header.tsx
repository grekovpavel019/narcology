import React, { useState, useEffect, type FC } from "react";

import { useLocation } from "react-router-dom";

import NavLinkButton from "@/shared/components/NavLinkButton";
import BurgerButton from "@/shared/components/BurgerButton";
import LinkButton from "@/shared/components/LinkButton";

import styles from "./Header.module.scss";

const Header: FC = (): React.JSX.Element => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname])

    return (
        <header className={styles.siteHeader}>
            <div className={`container ${styles.headerInner}`}>
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