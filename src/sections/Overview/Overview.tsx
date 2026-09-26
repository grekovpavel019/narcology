import React, { type FC } from "react";

import CheckIcon from "@/shared/icons/CheckIcon";

import Title from "@/shared/components/typography/Title";
import Text from "@/shared/components/typography/Text";

import styles from "./Overview.module.scss";

const Overview: FC = (): React.JSX.Element => {
    return (
        <section className={`${styles.overview} container`}>
            <div className={styles.overview__intro}>
                <Title
                    variant="h1"
                >
                    О клинике "Алкоклиник"
                </Title>
                
                <Text>
                    Частная клиника, специализирующаяся на помощи людям с алкогольной зависимостью и их родственникам — от первичной консультации до восстановления.
                </Text>
            </div>

            <div className={styles.overview__hero}>

                <div>
                    <Title
                        variant="h3"
                    >
                        Наша история
                    </Title>

                    <Text>
                        Клиника «Новый Шаг» создана для того, чтобы люди с алкогольной зависимостью и их близкие могли получить понятную и деликатную помощь без осуждения и лишнего давления.
                    </Text>
                </div>

                <div>
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
        </section>
    );
};

export default Overview;