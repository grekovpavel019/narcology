import React, { type FC } from "react";

import Map from "@/shared/components/Map/Map";

import styles from "./Location.module.scss";

const Location: FC = (): React.JSX.Element => {
    return (
        <section className={`${styles.location} container`}>
            <h2>Как нас найти</h2>
            <div className={styles.wrap}>
                <Map />
            </div>
        </section>
    );
};

export default Location;