import React, { type FC, useState } from "react";

import { useForm, type SubmitHandler } from "react-hook-form";

import TextField from "@/shared/components/TextField";
import Button from "@/shared/components/Button";

import type { RegisterFormValues } from "../model/types";
import { registerRules } from "../model/rules";

import styles from "./RegisterForm.module.scss";
import { useUserContext } from "@/entities/User/model/useUserContext";

import { useNavigate } from "react-router-dom";

const RegisterForm: FC = (): React.JSX.Element => {

    const { 
        register, 
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterFormValues>();

    const [serverError, setServerError] = useState("");
    
    const navigate = useNavigate();

    const { register: registerAccount } = useUserContext();

    const onSubmit: SubmitHandler<RegisterFormValues> = async (data: RegisterFormValues) => {
        setServerError("");

        try {
            await registerAccount({
                login: data.login,
                email: data.email,
                password: data.password,
                fullname: data.fullname
            });

            navigate("/profile", { replace: true })

        } catch (e) {
            setServerError(
                e instanceof Error 
                    ? e.message
                    : "Не удалось выполнить запрос"
            )
        }
    }

    return (
        <form
            className={styles.register__form}
            onSubmit={handleSubmit(onSubmit)}
        >
            <TextField 
                label="Логин"
                error={errors.login?.message}
                hint="Латинские буквы, цифры, точка, дефис и подчёркивание."
                {...register("login", registerRules.login)}
            />
            <TextField 
                label="ФИО"
                error={errors.fullname?.message}
                placeholder="Иванов Иван Иванович"
                {...register("fullname", registerRules.fullname)}
            />
            <TextField 
                label="Электронная почта"
                type="email"
                error={errors.email?.message}
                placeholder="name@example.com"
                hint="На этот адрес придёт ссылка, если вы забудете пароль."
                {...register("email", registerRules.email)}
            />
            <TextField 
                label="Пароль"
                error={errors.password?.message}
                hint="Минимум 8 символов, буквы и цифры."
                type="password"
                {...register("password", registerRules.password)}
            />
            <TextField 
                label="Подтверждение пароля"
                type="password"
                error={errors.confirm?.message}
                {...register("confirm", registerRules.confirm)}
            />

            {serverError && (
                <p className={styles.alert}>{serverError}</p>
            )}

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