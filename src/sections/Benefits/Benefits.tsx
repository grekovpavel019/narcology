import React, { type FC } from "react";

import LockIcon from "@/shared/icons/LockIcon";
import UserIcon from "@/shared/icons/UserIcon";
import MessageIcon from "@/shared/icons/MessageIcon";
import LightningIcon from "@/shared/icons/LightningIcon";

import styles from "./Benefits.module.scss";

const Benefits: FC = (): React.JSX.Element => {
    return (
        <section className={`${styles.benefits} container`}>
            <h2>Почему обращаются к нам</h2>
            <div className={styles.benefitsGrid}>
                <div className="card">
                    <div className="benefitIcon">
                        <LockIcon />
                    </div>
                    <h3>Конфиденциальность</h3>
                    <p>Обращение и личные данные пациента защищены на всех этапах.</p>
                </div>
                <div className="card">
                    <div className="benefitIcon">
                       <UserIcon />
                    </div>
                    <h3>Индивидуальный подход</h3>
                    <p>Программа помощи подбирается для каждого пациента отдельно.</p>
                </div>
                <div className="card">
                    <div className="benefitIcon">
                        <MessageIcon />
                    </div>
                    <h3>Консультация специалиста</h3>
                    <p>Перед выбором программы вы получаете подробную консультацию.</p>
                </div>
                <div className="card">
                    <div className="benefitIcon">
                        <LightningIcon />
                    </div>
                    <h3>Современные методы</h3>
                    <p>Используем актуальные подходы к работе с зависимостью.</p>
                </div>
            </div>
        </section>
    );
};

export default Benefits;