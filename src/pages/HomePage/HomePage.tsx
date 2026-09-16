import React, { type FC } from "react";

import styles from "./HomePage.module.scss";

const HomePage: FC = (): React.JSX.Element => {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1>
                            Новая Жизнь
                        </h1>

                        <nav>
                            <ul>
                                <li>О клинике</li>
                                <li>Услуги</li>
                                <li>Цены</li>
                            </ul>
                        </nav>

                        <button>
                            Запись
                        </button>
                    </div>
                </div>
            </header>

            <main className={styles.main}>

                <section className={styles.hero}>
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <h1>Помощь начинается с первого шага</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nihil quam iure accusantium sapiente nostrum facilis in praesentium!</p>
                            <button>Получить консультацию</button>
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