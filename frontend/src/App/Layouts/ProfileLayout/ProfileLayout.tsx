import React, { type FC } from "react";

import ProfileAside from "@/widgets/ProfileAside";

import { Outlet, useLocation } from "react-router-dom";

import styles from "./ProfileLayout.module.scss";

const ProfileLayout: FC = (): React.JSX.Element => {

    const location = useLocation();

    return (
        <div className={styles.shell}>
            <ProfileAside />

            <div key={location.pathname} className={styles.content}>
                <Outlet />
            </div>
        </div>
    );
};

export default ProfileLayout;