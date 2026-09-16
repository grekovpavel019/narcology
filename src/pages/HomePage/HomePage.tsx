import React, { type FC } from "react";

import styles from "./HomePage.module.scss";

const HomePage: FC = (): React.JSX.Element => {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.headerContent}>
                        <h1 className={styles.logo}>
                            Новая Жизнь
                        </h1>

                        <nav className={styles.navigation}>
                            <ul>
                                <li><a href="">О клинике</a></li>
                                <li><a href="">Услуги</a></li>
                                <li><a href="">Цены</a></li>
                            </ul>

                            <button className="primaryButton">
                                Запись
                            </button>
                        </nav>

                    </div>
                </div>
            </header>

            <main className={styles.main}>

                <section className={styles.hero}>
                    <div className="container">

                        <div className={styles.heroContent}>
                            <h1 className={styles.heroTitle}>Помощь начинается с первого шага</h1>
                            <p className={styles.heroDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nihil quam iure accusantium sapiente nostrum facilis in praesentium!</p>
                            <div className={styles.buttonArea}>

                                <button className="primaryButton">Получить консультацию</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.advantage}>
                    <div className="container">

                        <div className={styles.advantageContent}>

                        </div>

                    </div>
                </section>
            </main>

            <footer className={styles.footer}>
                Подвал
            </footer>
        </div>
    );
};

export default HomePage;