import React, { type FC } from "react";

import { useUserContext } from "@/entities/User/model/useUserContext";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const ProtectedLayout: FC = (): React.JSX.Element => {
    const { status } = useUserContext();
    
    const location = useLocation();

    if (status === "loading") {
        return <div>Проверка авторизации...</div>
    }

    if (status === "unauthenticated") {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    if (status === "error") {
        return <div>Ошибка</div>
    }
    
    return (
        <Outlet />
    );
};

export default ProtectedLayout;