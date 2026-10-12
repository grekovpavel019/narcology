import React, { type FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

import LinkButton from "@/shared/components/LinkButton";
import Button from "@/shared/components/Button";
import AuthCard from "@/shared/components/AuthCard";
import InputField from "@/shared/components/InputField";

import { loginRules } from "@/shared/validation/loginRules";

import styles from "./RegisterForm.module.scss";

type RegisterFormValues = {
    login: string;
    fullname: string;
    email: string;
    password: string;
    confirm: string;
}

const RegisterForm: FC = (): React.JSX.Element => {

    const { register, handleSubmit, formState } = useForm<RegisterFormValues>();

    const loginError = formState.errors["login"]?.message;
    const passwordError = formState.errors["password"]?.message;

    const submitForm: SubmitHandler<RegisterFormValues> = (data) => {
        console.log(data);
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
                onSubmit={handleSubmit(submitForm)}
            >
                <InputField>
                    <label htmlFor="login">Логин</label>
                    <input type="text" id="login" {...register("login", loginRules)}/>
                </InputField>

                <InputField>
                    <label htmlFor="fullName">ФИО</label>
                    <input type="text" id="fullname"/>
                </InputField>

                <InputField>
                    <label htmlFor="email">Электаронная почта</label>
                    <input type="email" id="email"/>
                </InputField>

                <InputField>
                    <label htmlFor="password">Пароль</label>
                    <input id="password"/>
                </InputField>

                <InputField>
                    <label htmlFor="confirm">Подтверждение пароля</label>
                    <input id="confirm"/>
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