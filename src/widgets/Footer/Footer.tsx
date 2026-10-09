import React, { type FC } from "react";

import LinkButton from "@/shared/components/LinkButton";
import Title from "@/shared/components/typography/Title";

import styles from "./Footer.module.scss";

import { CLINIC_ADDRESS, CLINIC_EMAIL, CLINIC_HOURS, CLINIC_TELEPHONE } from "@/shared/constants/contacts";

const Footer: FC = (): React.JSX.Element => {
    return (
        <footer className={`${styles.footer}`}>
            <div className={`${styles.footer__inline} container`}>
                <div>
                    <Title variant="h3">Алкоклиник</Title>
                    <p className={styles.desc}>
                        Частная клиника помощи при алкогольной зависимости. Консультации, лечение, кодирование и поддержка родственников.
                    </p>
                </div>

                <div className={styles.nav}>
                    <Title variant="h4">Навигация</Title>
                    <ul>
                        <li><LinkButton variant="inlineButton" to="/">Главная</LinkButton></li>
                        <li><LinkButton variant="inlineButton" to="/about">О клинике</LinkButton></li>
                        <li><LinkButton variant="inlineButton" to="/services">Услуги</LinkButton></li>
                        <li><LinkButton variant="inlineButton" to="/contacts">Получить консультацию</LinkButton></li>
                    </ul>
                </div>

                <div className={styles.contacts}>
                    <Title variant="h4">Контакты</Title>
                    <ul>
                        <li>
                            <address>{CLINIC_ADDRESS}</address>
                        </li>
                        <li>
                            <a href={`tel:${CLINIC_TELEPHONE.href}`}>{CLINIC_TELEPHONE.label}</a>
                        </li>
                        <li>
                            <a href={`mailto:${CLINIC_EMAIL}`}>{CLINIC_EMAIL}</a>
                        </li>
                        <li>{CLINIC_HOURS}</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;