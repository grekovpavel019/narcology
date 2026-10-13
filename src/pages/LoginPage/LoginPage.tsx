import React, { type FC } from "react";

import LoginForm from "@/features/login";

import AuthCard from "@/shared/components/AuthCard";
import LinkButton from "@/shared/components/LinkButton";

const LoginPage: FC = (): React.JSX.Element => {
    return (
        <AuthCard
            title="Вход в аккаунт"
            description="Введите логин и пароль, чтобы открыть личный кабинет."
            footer= {
                <span>Нет аккаунта? <LinkButton variant="blueText" to="/register">Зарегестрироваться</LinkButton></span>
            }
            size="sm"
        >
            <LoginForm />
        </AuthCard>
    );
};

export default LoginPage;