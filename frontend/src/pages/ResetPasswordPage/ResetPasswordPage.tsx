import React, { type FC } from "react";

import AuthCard from "@/shared/components/AuthCard";
import ResetPassForm from "@/features/reset-pass/ui/ResetPassForm";

const ResetPasswordPage: FC = (): React.JSX.Element => {
    return (
        <AuthCard
            title="Новый пароль"
            description="Придумайте новый пароль для своего аккаунта."
        >
            <ResetPassForm />
        </AuthCard>
    );
};

export default ResetPasswordPage;