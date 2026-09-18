import React, { type FC } from "react";

import Header from "@/sections/Header";

import styles from "./HomePage.module.scss";

const HomePage: FC = (): React.JSX.Element => {
    return (
        <>
            <Header />

            <main>
                <section className={`${styles.hero} container`}>
                    <div className={styles.heroIntro}>
                        <span className={styles.eyebrow}>
                            + Частная Клиника "Новый шаг"
                        </span>

                        <h1 className={styles.heroHeader}>
                            Помощь в борьбе с алкогольной зависимостью
                        </h1>

                        <p className={styles.heroDescription}>
                            Консультация специалистов, лечение алкогольной зависимости и программы кодирования с индивидуальным подходом к каждому пациенту.
                        </p>

                        <div className={styles.heroActions}>
                            <button className="buttonPrimary">Получить консультацию</button>
                            <button className="buttonSecondary">Наши услуги</button>
                        </div>

                        <div className={styles.heroNote}>
                            Мы не даём медицинских гарантий и не обещаем конкретный результат — подход подбирается индивидуально после консультации со специалистом.
                        </div>
                    </div>

                    <div className={styles.card}>
                        123
                    </div>
                </section>
            </main>

        </>
    
    );
};

export default HomePage;