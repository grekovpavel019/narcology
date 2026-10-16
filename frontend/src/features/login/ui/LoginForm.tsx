import React, { type FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

import TextField from "@/shared/components/TextField";
import Button from "@/shared/components/Button";
import LinkButton from "@/shared/components/LinkButton";

import { loginRules } from "../model/rules";
import type { LoginFormValues } from "../model/types";

import styles from "./LoginForm.module.scss";

const LoginForm: FC = (): React.JSX.Element => {

    const {
        register, 
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormValues>();

    const onSubmit: SubmitHandler<LoginFormValues> = (data: LoginFormValues) => {
        console.log(data);
    }

    return (
        <form 
            className={styles.login__form}
            onSubmit={handleSubmit(onSubmit)}
        >
            <TextField 
                label="Логин"
                error={errors.login?.message}
                {...register("login", loginRules.login)}
            />

            <TextField 
                label="Пароль"
                error={errors.password?.message}
                endSlot={
                    <LinkButton variant="blueText" to="/register">Забыли пароль?</LinkButton>
                }
                {...register("password", loginRules.password)}
            />

            <div className={styles.button__area}>
                <Button
                    variant="primaryButton"
                    type="submit"
                >
                    Войти
                </Button>
            </div>
        </form> 
    );
};



export default LoginForm;