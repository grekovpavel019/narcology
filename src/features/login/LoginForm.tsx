import React, { type FC } from "react";

import Title from "@/shared/components/typography/Title";
import Text from "@/shared/components/typography/Text";
import SubmitButton from "@/shared/components/SubmitButton";

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

                <form action="post" onSubmit={submitForm}>
                    <div className="login__area">
                        <label htmlFor=""></label>
                        <input type="text" />
                    </div>

                    <div className="password__area">
                        <label htmlFor=""></label>
                        <input type="text" />
                    </div>

                    <div className="button__area">
                        <SubmitButton
                            variant="primaryButton"
                        >
                            Войти
                        </SubmitButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;