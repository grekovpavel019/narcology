import React, { type FC } from "react";

import styles from "./AuthLayout.module.scss";

import { Outlet } from "react-router-dom";

import { Navigate } from "react-router-dom";
import { useUserContext } from "@/entities/User/model/useUserContext";

const AuthLayout: FC = (): React.JSX.Element => {

    const { status } = useUserContext();

    if (status === "loading") {
        return <div>Проверка авторизации...</div>;
    }

    if (status === "error") {
        return <div>Ошибка проверки авторизации</div>;
    }

    if (status === "authenticated") {
        return <Navigate to="/profile" replace />;
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