import React, { type FC } from "react";

import { useUserContext } from "@/entities/User/model/useUserContext";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedAuthLayout: FC = (): React.JSX.Element => {
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
        <Outlet />
    );
};

export default ProtectedAuthLayout;