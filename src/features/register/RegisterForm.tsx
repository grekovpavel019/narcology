import React, { type FC, type SyntheticEvent } from "react";

import Title from "@/shared/components/typography/Title";
import Text from "@/shared/components/typography/Text";
import LinkButton from "@/shared/components/LinkButton";
import Button from "@/shared/components/Button";

import styles from "./RegisterForm.module.scss";

const RegisterForm: FC = (): React.JSX.Element => {

    const submitForm = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        console.log(2);
    }

    return (
        <div className={styles.register}>
            <div className={styles.register__inner}>
                <div className={styles.register__intro}>
                    <Title variant="h2">Создание аккаунта</Title>
                    <Text>Заполните данные, чтобы получить доступ к личному кабинету.</Text>
                </div>

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

                <div className={styles.register__footer}>
                    <span>Уже есть аккаунт? <LinkButton variant="blueText" to="/login">Войти</LinkButton></span>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;