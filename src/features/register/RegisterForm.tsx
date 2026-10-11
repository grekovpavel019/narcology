import React, { type FC, type SyntheticEvent } from "react";

import LinkButton from "@/shared/components/LinkButton";
import Button from "@/shared/components/Button";
import AuthCard from "@/shared/components/AuthCard";
import Input from "@/shared/components/inputs/Input";
import PasswordInput from "@/shared/components/inputs/PasswordInput";

import styles from "./RegisterForm.module.scss";

const RegisterForm: FC = (): React.JSX.Element => {

    const submitForm = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        console.log(2);
    }

    return (

        <AuthCard
            title="Создание аккаунта"
            description="Заполните данные, чтобы получить доступ к личному кабинету."
            footer={<span>Уже есть аккаунт? <LinkButton variant="blueText" to="/login">Войти</LinkButton></span>}
        >
            <form 
                className={styles.register__form}
                action="post" 
                onSubmit={submitForm}
            >
                <div className={styles.input__area}>
                    <label htmlFor="login">Логин</label>
                    <Input type="text" id="login"/>
                </div>

                <div className={styles.input__area}>
                    <label htmlFor="fullName">ФИО</label>
                    <Input type="text" id="fullname"/>
                </div>

                <div className={styles.input__area}>
                    <label htmlFor="email">Электаронная почта</label>
                    <Input type="email" id="email"/>
                </div>

                <div className={styles.input__area}>
                    <label htmlFor="password">Пароль</label>
                    <PasswordInput id="password"/>
                </div>

                <div className={styles.input__area}>
                    <label htmlFor="confirm">Подтверждение пароля</label>
                    <PasswordInput id="confirm"/>
                </div>

                <div className={styles.button__area}>
                    <Button
                        variant="primaryButton"
                        type="submit"
                    >
                        Зарегестрироваться
                    </Button>
                </div>
            </form>
        </AuthCard>
    );
};

export default RegisterForm;