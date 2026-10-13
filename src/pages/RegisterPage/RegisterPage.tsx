import React, { type FC } from "react";

import RegisterForm from "@/features/register";

import AuthCard from "@/shared/components/AuthCard";
import LinkButton from "@/shared/components/LinkButton";

const RegisterPage: FC = (): React.JSX.Element => {
    return (
        <AuthCard
            title="Создание аккаунта"
            description="Заполните данные, чтобы получить доступ к личному кабинету."
            footer={
                <span>Есть аккаунт? <LinkButton variant="blueText" to="/login">Войти</LinkButton></span>
            }
        >
            <RegisterForm />
        </AuthCard>
    );
};

export default RegisterPage;