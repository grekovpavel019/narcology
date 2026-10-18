import React, { type FC } from "react";

import Title from "@/shared/components/typography/Title";
import Text from "@/shared/components/typography/Text";

import styles from "./ProfilePage.module.scss";
import UserCard from "@/entities/User";

const ProfilePage: FC = (): React.JSX.Element => {

    return (
        <div className={styles.profile}>
            <Title variant="h1">Личный кабинет</Title>
            <Text>Здесь можно изменить данные аккаунта, пароль и выйти из системы.</Text>

            <UserCard />
        </div>
    );
};

export default ProfilePage;