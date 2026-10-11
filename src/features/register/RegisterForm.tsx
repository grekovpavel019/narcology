import React, { type FC, type SyntheticEvent } from "react";

import LinkButton from "@/shared/components/LinkButton";
import Button from "@/shared/components/Button";

import styles from "./RegisterForm.module.scss";
import AuthCard from "@/shared/components/AuthCard";

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
                    <input type="text" id="login" />
                </div>

                <div className={styles.input__area}>
                    <label htmlFor="fullName">ФИО</label>
                    <input type="text" id="fullName" />
                </div>

                <div className={styles.input__area}>
                    <label htmlFor="email">Электаронная почта</label>
                    <input type="email" id="email" />
                </div>

                <div className={styles.input__area}>
                    <label htmlFor="password">Пароль</label>
                    <input type="password" id="password" />
                </div>

                <div className={styles.input__area}>
                    <label htmlFor="confirm">Подтверждение пароля</label>
                    <input type="password" id="confirm" />
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