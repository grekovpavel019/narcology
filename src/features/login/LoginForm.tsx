import React, { type FC } from "react";
import { useForm } from "react-hook-form";

import Button from "@/shared/components/Button";
import LinkButton from "@/shared/components/LinkButton";

import InputField from "@/shared/components/InputField";

import AuthCard from "@/shared/components/AuthCard";

import type { SubmitHandler } from "react-hook-form";
import { loginRules } from "@/shared/validation/loginRules";
import { passwordRules } from "@/shared/validation/passwordRules";

import styles from "./LoginForm.module.scss";

type LoginFormValues = {
    login: string;
    password: string;
}

const LoginForm: FC = (): React.JSX.Element => {

    const { register, handleSubmit, formState } = useForm<LoginFormValues>();

    const loginError = formState.errors["login"]?.message;
    const passwordError = formState.errors["password"]?.message;

    const submitForm: SubmitHandler<LoginFormValues> = (data) => {
        console.log(data);
    }

    return (
        <AuthCard
            title="Вход в аккаунт"
            description="Введите логин и пароль, чтобы открыть личный кабинет."
            footer= {
                <span>Нет аккаунта? <LinkButton variant="blueText" to="/register">Зарегестрироваться</LinkButton></span>
            }
        >
            <form 
                className={styles.login__form}
                action="post" 
                onSubmit={handleSubmit(submitForm)}
            >
                <InputField
                    errors={loginError ?? loginError}
                >
                    <label htmlFor="login">Логин</label>
                    <input 
                        type="text" 
                        id="login" 
                        {...register("login", loginRules)}
                    /> 
                </InputField>

                <InputField
                    errors={passwordError ?? passwordError}                >
                    <div className={styles.field__row}>
                        <label htmlFor="password">Пароль</label>
                        <LinkButton variant="blueText" to="/">Забыли пароль?</LinkButton>
                    </div>
                    <input 
                        type="password" 
                        id="password"
                        {...register("password", passwordRules)}
                    />
                </InputField>

                <div className={styles.button__area}>
                    <Button
                        variant="primaryButton"
                        type="submit"
                    >
                        Войти
                    </Button>
                </div>
            </form> 
        </AuthCard>
    );
};



export default LoginForm;