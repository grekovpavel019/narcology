import React, { type FC } from "react";

import styles from "./HomePage.module.scss";

const HomePage: FC = (): React.JSX.Element => {
    return (
        <header className={styles.siteHeader}>
            <div className={`container ${styles.headerInner}`}>
                <div className={styles.logo}>
                    Капельник
                </div>

                <nav className={styles.mainNav}>
                    <a className={styles.navLink} href="">Главная</a>
                    <a className={styles.navLink} href="">О клинике</a>
                    <a className={styles.navLink} href="">Услуги</a>
                </nav>

                <div className="actions">
                    <button className={styles.buttonPrimary}>Получить консультацию</button>
                </div>
            </div>
        </header>
    );
};

export default HomePage;