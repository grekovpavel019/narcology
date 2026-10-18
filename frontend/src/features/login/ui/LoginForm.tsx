import React, { type FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

import TextField from "@/shared/components/TextField";
import Button from "@/shared/components/Button";
import LinkButton from "@/shared/components/LinkButton";

import { loginRules } from "../model/rules";
import type { LoginFormValues } from "../model/types";

import { useNavigate } from "react-router-dom";

import styles from "./LoginForm.module.scss";
import { useUserContext } from "@/entities/User/model/useUserContext";

const LoginForm: FC = (): React.JSX.Element => {

    const navigate = useNavigate();

    const {
        register, 
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormValues>();

    const { login } = useUserContext();

    const onSubmit: SubmitHandler<LoginFormValues> = async (data: LoginFormValues) => {

        try {
            await login(data);

            navigate("/profile", { replace: true });
        } catch (e) {
            console.error(e);
        }
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