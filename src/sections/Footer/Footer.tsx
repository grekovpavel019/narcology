import React, { type FC } from "react";

import LinkButton from "@/shared/components/NavLinkButton";

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
                        {/* <li><LinkButton variant="inlineButton">Главная</LinkButton></li>
                        <li><LinkButton variant="inlineButton">О клинике</LinkButton></li>
                        <li><LinkButton variant="inlineButton">Услуги</LinkButton></li>
                        <li><LinkButton variant="inlineButton">Получить консультацию</LinkButton></li> */}
                    </ul>
                </div>

                <div className={styles.contacts}>
                    <h4>Контакты</h4>
                    <ul>
                        <li>г. Брянск, ул. Харьковская, д. 10</li>
                        <li>+7 (903) 819-87-23</li>
                        <li>grekovpavel065@gmail.com</li>
                        <li>Ежедневно, 9:00-21:00</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;