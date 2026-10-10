import React, { type FC } from "react";

import Title from "@/shared/components/typography/Title";
import Text from "@/shared/components/typography/Text";
import SubmitButton from "@/shared/components/SubmitButton";
import LinkButton from "@/shared/components/LinkButton";

import styles from "./LoginForm.module.scss";

const LoginForm: FC = (): React.JSX.Element => {

    const submitForm = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(1);
    }

    return (
        <div className={styles.login}>
            <div className={styles.login__inner}>
                <div className={styles.login__intro}>
                    <Title variant="h2">Вход в аккаунт</Title>
                    <Text>Введите логин и пароль, чтобы открыть личный кабинет.</Text>
                </div>

                <form 
                    className={styles.login__form}
                    action="post" 
                    onSubmit={submitForm}
                >
                    <div className={styles.input__area}>
                        <label htmlFor="login">Логин</label>
                        <input type="text" id="login" />
                    </div>

                    <div className={styles.input__area}>
                        <div className={styles.field__row}>
                            <label htmlFor="password">Пароль</label>
                            <LinkButton variant="blueText" to="/">Забыли пароль?</LinkButton>
                        </div>
                        <input type="text" id="password" />
                    </div>

                    <div className={styles.button__area}>
                        <SubmitButton
                            variant="primaryButton"
                        >
                            Войти
                        </SubmitButton>
                    </div>
                </form>

                <div className={styles.login__footer}>
                    <span>Нет аккаунта? <LinkButton variant="blueText" to="/register">Зарегестрироваться</LinkButton></span>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;