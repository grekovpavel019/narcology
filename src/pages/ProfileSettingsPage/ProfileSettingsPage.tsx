import React, { type FC } from "react";

import Title from "@/shared/components/typography/Title";
import Text from "@/shared/components/typography/Text";

import styles from "./ProfileSettingsPage.module.scss";

const ProfileSettingsPage: FC = (): React.JSX.Element => {
    return (
        <div className={styles["profile-settings"]}>
            <Title variant="h1">Настройки</Title>

            <section className={styles.section}>
                
            </section>

            <section className={styles.section}>

            </section>
        </div>
    );
};

export default ProfileSettingsPage;