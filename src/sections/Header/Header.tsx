import React, { useState, type FC } from "react";

import LinkButton from "@/shared/components/LinkButton";
import BurgerButton from "@/shared/components/BurgerButton";

import styles from "./Header.module.scss";

const Header: FC = (): React.JSX.Element => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.siteHeader}>
            <div className={`container ${styles.headerInner}`}>
                <div className={styles.logo}>
                    Алкоклиник
                </div>

                <nav className={styles.mainNav}>
                    <LinkButton variant="navLinkButton">Главная</LinkButton>
                    <LinkButton variant="navLinkButton">О клинике</LinkButton>
                    <LinkButton variant="navLinkButton">Услуги</LinkButton>
                </nav>

                <div className={styles.buttonArea}>
                    <LinkButton variant="primaryButton">Получить консультацию</LinkButton>
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
                <LinkButton variant="navLinkButton" active={true}>Главная</LinkButton>
                <LinkButton variant="navLinkButton" active={false}>О клинике</LinkButton>
                <LinkButton variant="navLinkButton" active={false}>Услуги</LinkButton>
                <LinkButton variant="navLinkButton" active={false}>Получить консультацию</LinkButton>
            </div>
            
        </header>
    );
};

export default Header;