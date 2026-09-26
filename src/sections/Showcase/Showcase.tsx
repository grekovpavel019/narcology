import React, { type FC } from "react";

import CheckIcon from "@/shared/icons/CheckIcon";
import Title from "@/shared/components/typography/Title";
import Text from "@/shared/components/typography/Text";

import doctorImage from "@/assets/img/doctor.jpg";

import styles from "./Showcase.module.scss";

const Showcase: FC = (): React.JSX.Element => {
    return (
        <section className={styles.showcase}>
            <div className={`${styles.showcase__inner} container`}>

                <div className={styles.image}>
                    <img src={doctorImage} alt="doctorImage" />
                </div>

                <div className={styles.showcase__content}>
                    <div className={styles.showcase__history}>
                        <Title
                            variant="h3"
                        >
                            Наша история
                        </Title>

                        <Text>
                            Клиника «Новый Шаг» создана для того, чтобы люди с алкогольной зависимостью и их близкие могли получить понятную и деликатную помощь без осуждения и лишнего давления.
                        </Text>
                    </div>

                    <div className={styles.showcase__education}>
                        <Title
                            variant="h3"
                        >
                            Принципы работы
                        </Title>

                        <ul>
                            <li><CheckIcon /><Text>Уважительное отношение к пациенту на всех этапах обращения</Text></li>
                            <li><CheckIcon /><Text>Конфиденциальность обращения и личных данных</Text></li>
                            <li><CheckIcon /><Text>Подбор помощи только после личной консультации</Text></li>
                            <li><CheckIcon /><Text>Отказ от давления, запугивания и завышенных обещаний</Text></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;