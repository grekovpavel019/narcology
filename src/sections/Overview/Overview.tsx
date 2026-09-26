import React, { type FC } from "react";

import Title from "@/shared/components/typography/Title";
import Text from "@/shared/components/typography/Text";
import Breadcrumb from "@/shared/components/Breadcrumb";

import styles from "./Overview.module.scss";

const Overview: FC = (): React.JSX.Element => {
    return (
        <section className={styles.overview}>
            <div className={`${styles.overview__intro} container`}>
                
                <Breadcrumb>О клинике</Breadcrumb>

                <Title
                    variant="h1"
                >
                    О клинике "Алкоклиник"
                </Title>
                
                <Text>
                    Частная клиника, специализирующаяся на помощи людям с алкогольной зависимостью и их родственникам — от первичной консультации до восстановления.
                </Text>
            </div>
        </section>
    );
};

export default Overview;