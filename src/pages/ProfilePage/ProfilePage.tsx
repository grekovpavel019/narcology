import React, { type FC } from "react";

import Title from "@/shared/components/typography/Title";
import Text from "@/shared/components/typography/Text";

import styles from "./ProfilePage.module.scss";

const ProfilePage: FC = (): React.JSX.Element => {
    return (
        <div className={styles.content}>
            <Title variant="h1">Личный кабинет</Title>
            <Text>Здесь можно изменить данные аккаунта, пароль и выйти из системы.</Text>

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
        </div>
    );
};

export default ProfilePage;