import React, { type FC } from "react";

import Benefits from "@/sections/Benefits";
import Overview from "@/sections/Overview";

import styles from "./AboutPage.module.scss"

const AboutPage: FC = (): React.JSX.Element => {
    return (
        <>
            <Overview />

            <div className={styles.benefits__area}>
                <Benefits />
            </div>
        </>
    );
};

export default AboutPage;