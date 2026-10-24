import React, { type FC } from "react";

import ProfileAside from "@/widgets/ProfileAside";

import { Outlet, useLocation } from "react-router-dom";

import styles from "./AdminLayout.module.scss";

const AdminLayout: FC = (): React.JSX.Element => {

    const location = useLocation();

    return (
        <div className={styles.shell}>
            <ProfileAside isAdmin={true}/>

            <div key={location.pathname} className={styles.content}>
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;