import React, { type FC } from "react";

import styles from "./HomePage.module.scss";

const HomePage: FC = (): React.JSX.Element => {
    return (
        <>
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

            <main>
                <section className={`${styles.hero} container`}>
                    <div className={styles.card}>
                        <div className="eyebrow">
                            + Частная Клиника "Новый шаг"
                        </div>

                        <h1 className={styles.heroHeader}>
                            Помощь в борьбе с алкогольной зависимостью
                        </h1>

                        <p>
                            Консультация специалистов, лечение алкогольной зависимости и программы кодирования с индивидуальным подходом к каждому пациенту.
                        </p>

                        <div className={styles.heroActions}>
                            <button className={styles.buttonPrimary}>Получить консультацию</button>
                            <button className="buttonSecondary">Наши услуги</button>
                        </div>

                        <div className="heroNote">
                            Мы не даём медицинских гарантий и не обещаем конкретный результат — подход подбирается индивидуально после консультации со специалистом.
                        </div>
                    </div>
                </section>
            </main>

        </>
    
    );
};

export default HomePage;