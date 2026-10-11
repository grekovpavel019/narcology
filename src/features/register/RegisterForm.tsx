import React, { type FC, type SyntheticEvent } from "react";

import LinkButton from "@/shared/components/LinkButton";
import Button from "@/shared/components/Button";
import AuthCard from "@/shared/components/AuthCard";
import Input from "@/shared/components/inputs/Input";
import PasswordInput from "@/shared/components/inputs/PasswordInput";
import InputField from "@/shared/components/inputs/InputField";

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
                <InputField>
                    <label htmlFor="login">Логин</label>
                    <Input type="text" id="login"/>
                </InputField>

                <InputField>
                    <label htmlFor="fullName">ФИО</label>
                    <Input type="text" id="fullname"/>
                </InputField>

                <InputField>
                    <label htmlFor="email">Электаронная почта</label>
                    <Input type="email" id="email"/>
                </InputField>

                <InputField>
                    <label htmlFor="password">Пароль</label>
                    <PasswordInput id="password"/>
                </InputField>

                <InputField>
                    <label htmlFor="confirm">Подтверждение пароля</label>
                    <PasswordInput id="confirm"/>
                </InputField>

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