import React, { type FC } from "react";

import TextField from "@/shared/components/TextField";
import Button from "@/shared/components/Button";

import styles from "./RegisterForm.module.scss";

const RegisterForm: FC = (): React.JSX.Element => {
    return (
        <form
            className={styles.register__form}
        >
            <TextField 
                label="Логин"
            />
            <TextField 
                label="ФИО"
            />
            <TextField 
                label="Электронная почта"
            />
            <TextField 
                label="Пароль"
            />
            <TextField 
                label="Подтверждение пароля"
            />

            <div className={styles.button__area}>
                <Button
                    variant="primaryButton"
                    type="submit"
                >
                    Зарегестрироваться
                </Button>
            </div>

        </form>
    );
};

export default RegisterForm;