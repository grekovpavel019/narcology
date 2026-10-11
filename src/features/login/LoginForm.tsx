import React, { type FC } from "react";

import Button from "@/shared/components/Button";
import LinkButton from "@/shared/components/LinkButton";

import Input from "@/shared/components/inputs/Input";
import PasswordInput from "@/shared/components/inputs/PasswordInput";

import AuthCard from "@/shared/components/AuthCard";

import styles from "./LoginForm.module.scss";

const LoginForm: FC = (): React.JSX.Element => {

    const submitForm = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(1);
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
                onSubmit={submitForm}
            >
                <div className={styles.input__area}>
                    <label htmlFor="login">Логин</label>
                    <Input type="text" id="login" /> 
                </div>

                <div className={styles.input__area}>
                    <div className={styles.field__row}>
                        <label htmlFor="password">Пароль</label>
                        <LinkButton variant="blueText" to="/">Забыли пароль?</LinkButton>
                    </div>
                    <PasswordInput id="password" />
                </div>

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