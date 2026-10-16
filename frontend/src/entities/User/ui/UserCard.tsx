import React, { type FC } from "react";

import styles from "./UserCard.module.scss";

const UserCard: FC = (): React.JSX.Element => {
    return (
        <section className={styles["user-card"]}>
            <div className={styles.avatar}>
                <span>ИИ</span>
            </div>

            <div>
                <h3 className={styles["full-name"]}>
                    Иванов Иван
                </h3>

                <div className={styles["user-card__meta"]}>
                    <div>
                        <dt>Логин</dt>
                        <dd>ivan123</dd>
                    </div>
                    <div>
                        <dt>Почта</dt>
                        <dd>ivan@gmail.com</dd>
                    </div>
                </div>
            </div>
            
            <span className={styles.badge}>
                Аккаут активен
            </span>
        </section>
    );
};

export default UserCard;