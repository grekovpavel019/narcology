import React from "react";

import AuthCard from "@/shared/components/AuthCard";
import ForgotPassForm from "@/features/forgot-pass";

const ForgotPasswordPage = (): React.JSX.Element => {
    return (
        <AuthCard
            title="Восстановление пароля"
            description="Укажите email, привязанный к вашему аккаунту. Мы отправим ссылку для восстановления пароля."
        >
            <ForgotPassForm />
        </AuthCard>
    );
};

export default ForgotPasswordPage;