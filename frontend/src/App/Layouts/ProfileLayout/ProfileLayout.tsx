import React, { type FC } from "react";

import ProfileAside from "@/widgets/ProfileAside";

import { Outlet } from "react-router-dom";

import styles from "./ProfileLayout.module.scss";

const ProfileLayout: FC = (): React.JSX.Element => {
    return (
        <div className={styles.shell}>
            <ProfileAside />

            <div className={styles.content}>
                <Outlet />
            </div>
        </div>
    );
};

export default ProfileLayout;