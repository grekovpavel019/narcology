import React, { type FC } from "react";

import LinkButton from "@/shared/components/LinkButton";
import ShieldIcon from "@/shared/icons/ShieldIcon";

import styles from "./Hero.module.scss";

const Hero: FC = (): React.JSX.Element => {
    return (
        <section className={`${styles.hero} container`}>
            <div className={styles.heroIntro}>
                <span className={styles.eyebrow}>
                    + Частная Клиника "Новый шаг"
                </span>

                <h1>
                    Помощь в борьбе с алкогольной зависимостью
                </h1>

                <p>
                    Консультация специалистов, лечение алкогольной зависимости и программы кодирования с индивидуальным подходом к каждому пациенту.
                </p>

                <div className={styles.actions}>
                    <LinkButton variant="primaryButton">Получить консультацию</LinkButton>
                    <LinkButton variant="secondaryButton">Наши услуги</LinkButton>
                </div>

                <div className={styles.note}>
                    <ShieldIcon />
                    Мы не даём медицинских гарантий и не обещаем конкретный результат — подход подбирается индивидуально после консультации со специалистом.
                </div>
            </div>

            <div className={styles.card}>
                123
            </div>
        </section>
    );
};

export default Hero;