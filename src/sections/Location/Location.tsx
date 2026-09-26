import React, { type FC } from "react";

import Title from "@/shared/components/typography/Title";
import Map from "@/shared/components/Map/Map";

import styles from "./Location.module.scss";

const Location: FC = (): React.JSX.Element => {
    return (
        <section className={`${styles.location}`}>
            <div className={`${styles["location__inner"]} container`}>
                <Title variant="h2">Как нас найти</Title>
                <div className={styles.wrap}>
                    <Map />
                </div>
            </div>
        </section>
    );
};

export default Location;