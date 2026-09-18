import React, { type FC } from "react";

import styles from "./Services.module.scss";

const Services: FC = (): React.JSX.Element => {
    return (
        <section className={`${styles.services} container`}>
            <h2>Наши услуги</h2>
            <p>Каждое направление начинается с консультации — так специалист может предложить подходящий именно вам вариант помощи.</p>
            <div className={styles.servicesGrid}>
                <div className="servicesCard">
                    <div className="icon">1</div>
                    <h3>Консультация специалиста</h3>

                    <div className="who">
                        <b>Кому подходит: </b>
                        Тем, кто хочет разобраться в ситуации и понять, какая помощь подойдёт.
                    </div>
                </div>
                <div className="servicesCard">
                    <div className="icon">1</div>
                    <h3>Консультация специалиста</h3>

                    <div className="who">
                        <b>Кому подходит: </b>
                        Тем, кто хочет разобраться в ситуации и понять, какая помощь подойдёт.
                    </div>
                </div>
                <div className="servicesCard">
                    <div className="icon">1</div>
                    <h3>Консультация специалиста</h3>

                    <div className="who">
                        <b>Кому подходит: </b>
                        Тем, кто хочет разобраться в ситуации и понять, какая помощь подойдёт.
                    </div>
                </div>
                <div className="servicesCard">
                    <div className="icon">1</div>
                    <h3>Консультация специалиста</h3>

                    <div className="who">
                        <b>Кому подходит: </b>
                        Тем, кто хочет разобраться в ситуации и понять, какая помощь подойдёт.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;