import React, { type FC } from "react";

import Title from "@/shared/components/typography/Title";
import Text from "@/shared/components/typography/Text";

import ChangeDataForm from "@/features/change-data";

import styles from "./ProfileSettingsPage.module.scss";

const ProfileSettingsPage: FC = (): React.JSX.Element => {
    return (
        <div className={styles["profile-settings"]}>
            <Title variant="h1">Настройки</Title>

            <section className={styles.section}>
                <Title variant="h3">Мои данные</Title>
                <Text>Эти данные вы указали при регистрации.</Text>
                <ChangeDataForm />
            </section>
        </div>
    );
};

export default ProfileSettingsPage;