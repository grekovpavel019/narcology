import React, { type FC } from "react";

import ShieldIcon from "@/shared/icons/ShieldIcon";
import PlusIcon from "@/shared/icons/PlusIcon";
import LinkButton from "@/shared/components/LinkButton";

import heroImage from "@/assets/img/hero.jpg";

import styles from "./Hero.module.scss";

const Hero: FC = (): React.JSX.Element => {
    return (
        <section className={`${styles.hero} container`}>
            <div className={`${styles["hero__inner"]} container`}>
                <div className={styles["hero__intro"]}>
                    <span className={styles.eyebrow}>
                        <PlusIcon /> Частная Клиника "Алкоклиник"
                    </span>

                    <h1>
                        Помощь в борьбе с алкогольной зависимостью
                    </h1>

                    <p>
                        Консультация специалистов, лечение алкогольной зависимости и программы кодирования с индивидуальным подходом к каждому пациенту.
                    </p>

                    <div className={styles.actions}>
                        <LinkButton variant="primaryButton" to="/contacts">Получить консультацию</LinkButton>
                        <LinkButton variant="secondaryButton" to="/services">Наши услуги</LinkButton>
                    </div>

                    <div className={styles.note}>
                        <ShieldIcon />
                        Мы не даём медицинских гарантий и не обещаем конкретный результат — подход подбирается индивидуально после консультации со специалистом.
                    </div>
                </div>

                <div className={styles.card}>
                    <img src={heroImage} alt="heroImage" />
                </div>
            </div>
        </section>
    );
};

export default Hero;