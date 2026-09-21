import React, { type FC } from "react";

import LinkButton from "@/shared/components/LinkButton";

import styles from "./Footer.module.scss";

const Footer: FC = (): React.JSX.Element => {
    return (
        <footer className={`${styles.siteFooter}`}>
            <div className={`${styles.footerInline} container`}>
                <div>
                    <h3>Алкоклиник</h3>
                    <p className={styles.desc}>Частная клиника помощи при алкогольной зависимости. Консультации, лечение, кодирование и поддержка родственников.</p>
                </div>

                <div className={styles.nav}>
                    <h4>Навигация</h4>
                    <ul>
                        <li><LinkButton variant="inlineButton" to="/">Главная</LinkButton></li>
                        <li><LinkButton variant="inlineButton" to="/about">О клинике</LinkButton></li>
                        <li><LinkButton variant="inlineButton" to="/services">Услуги</LinkButton></li>
                        <li><LinkButton variant="inlineButton" to="/contacts">Получить консультацию</LinkButton></li>
                    </ul>
                </div>

                <div className={styles.contacts}>
                    <h4>Контакты</h4>
                    <ul>
                        <li>
                            <address>
                                г. Брянск, ул. Харьковская, д. 10
                            </address>
                        </li>
                        <li>
                            <a href="tel:+70000000000">
                                +7 (000) 000-00-00
                            </a>
                        </li>
                        <li>
                            <a href="mailto:burmalda@gmail.com">
                                burmalda@gmail.com
                            </a>
                        </li>
                        <li>Ежедневно, 9:00-21:00</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;