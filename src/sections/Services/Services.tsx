import React, { type FC } from "react";

import ServiceCard from "@/shared/components/ServiceCard";
import MessageIcon from "@/shared/icons/MessageIcon";
import LightningIcon from "@/shared/icons/LightningIcon";
import ShieldIcon from "@/shared/icons/ShieldIcon";
import UserIcon from "@/shared/icons/UserIcon";
import LinkButton from "@/shared/components/LinkButton";

import styles from "./Services.module.scss";

const Services: FC = (): React.JSX.Element => {
    return (
        <section className={`${styles.services}`}>
            <div className={`${styles.servicesInner} container`}>
                <h2>Наши услуги</h2>
                <p>Каждое направление начинается с консультации — так специалист может предложить подходящий именно вам вариант помощи.</p>
                <div className={styles.servicesGrid}>
                    <ServiceCard
                        title="Консультация специалиста"
                        icon={<MessageIcon />}
                        who="Тем, кто хочет разобраться в ситуации и понять, какая помощь подойдёт."
                    >
                        Первичная беседа, во время которой специалист оценивает ситуацию и предлагает варианты помощи.
                    </ServiceCard>

                    <ServiceCard
                        title="Кодирование от алкоголя"
                        icon={<LightningIcon />}
                        who="Пациентам, которым метод рекомендован специалистом по итогам консультации."
                    >
                        Один из методов работы с зависимостью, применяемый после консультации и оценки состояния.
                    </ServiceCard>

                    <ServiceCard
                        title="Лечение алкогольной зависимости"
                        icon={<ShieldIcon />}
                        who="Людям, которые хотят системно работать с зависимостью."
                    >
                        Комплексная программа помощи, которая формируется индивидуально с учётом состояния пациента.
                    </ServiceCard>

                    <ServiceCard
                        title="Восстановление после лечения"
                        icon={<UserIcon />}
                        who="Пациентам, завершившим лечение и нуждающимся в дальнейшей поддержке."
                    >
                        Поддержка на этапе восстановления после прохождения основной программы помощи.
                    </ServiceCard>
                </div>

                <div className={styles.buttonArea}>
                    <LinkButton variant="primaryButton" to="/services">Подробнее</LinkButton>
                </div>
            </div>
        </section>
    );
};

export default Services;