import React, { type FC } from "react";

import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "@/entities/User/model/useUserContext";

import styles from "./AuthLayout.module.scss";

const AuthLayout: FC = (): React.JSX.Element => {

    const { status } = useUserContext();

    if (status === "loading") {
        return <div>Проверка авторизации...</div>
    }

    if (status === "unauthenticated") {
        return <Navigate to="/login" replace />
    }

    if (status === "error") {
        return <div>Ошибка</div>
    }
    
    return (
        <main 
            className={styles.auth}
        >
            <Outlet />
        </main>
    );
};

export default AuthLayout;