import React, { type FC } from "react";

import LockIcon from "@/shared/icons/LockIcon";
import UserIcon from "@/shared/icons/UserIcon";
import MessageIcon from "@/shared/icons/MessageIcon";
import LightningIcon from "@/shared/icons/LightningIcon";
import BenefitCard from "@/shared/components/BenefitCard";

import styles from "./Benefits.module.scss";

const Benefits: FC = (): React.JSX.Element => {
    return (
        <section className={`${styles.benefits}`}>
            <div className={`${styles.benefitsInner} container`}>
                <h2>Почему обращаются к нам</h2>
                <div className={styles.benefitsGrid}>
                    <BenefitCard
                        title="Конфиденциальность"
                        icon={<LockIcon />}
                    >Обращение и личные данные пациента защищены на всех этапах.</BenefitCard>
                    <BenefitCard
                        title="Индивидуальный подход"
                        icon={<UserIcon />}
                    >Программа помощи подбирается для каждого пациента отдельно.</BenefitCard>
                    <BenefitCard
                        title="Консультация специалиста"
                        icon={<MessageIcon />}
                    >Перед выбором программы вы получаете подробную консультацию.</BenefitCard>
                    <BenefitCard
                        title="Современные методы"
                        icon={<LightningIcon />}
                    >Используем актуальные подходы к работе с зависимостью.</BenefitCard>
                </div>
            </div>
        </section>
    );
};

export default Benefits;