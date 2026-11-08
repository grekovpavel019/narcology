import React, { type FC } from "react";

import ProfileAside from "@/widgets/ProfileAside";

import { Outlet, useLocation, Navigate} from "react-router-dom";

import styles from "./AdminLayout.module.scss";
import { useUserContext } from "@/entities/User/model/useUserContext";

const AdminLayout: FC = (): React.JSX.Element => {

    const location = useLocation();

    const { user, status } = useUserContext();

    if (status === "loading") {
        return <div>Загрузка...</div>
    }

    if (user?.role !== "admin") {
        return <Navigate to="/profile" replace />
    }

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