import React, { type FC } from "react";

import LinkButton from "@/shared/components/LinkButton";
import BurgerIcon from "@/shared/icons/BurgerIcon";

import styles from "./Header.module.scss";

const Header: FC = (): React.JSX.Element => {
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
            </div>
        </header>
    );
};

export default Header;