import React, { type FC } from "react";

import { useForm, type SubmitHandler } from "react-hook-form";

import TextField from "@/shared/components/TextField";
import Button from "@/shared/components/Button";

import type { RegisterFormValues } from "../model/types";
import { registerRules } from "../model/rules";

import styles from "./RegisterForm.module.scss";

const RegisterForm: FC = (): React.JSX.Element => {

    const { 
        register, 
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterFormValues>();

    const onSubmit: SubmitHandler<RegisterFormValues> = (data: RegisterFormValues) => {
        console.log(data);
    }

    return (
        <form
            className={styles.register__form}
            onSubmit={handleSubmit(onSubmit)}
        >
            <TextField 
                label="Логин"
                error={errors.login?.message}
                {...register("login", registerRules.login)}
            />
            <TextField 
                label="ФИО"
                error={errors.fullname?.message}
                {...register("fullname", registerRules.fullname)}
            />
            <TextField 
                label="Электронная почта"
                error={errors.email?.message}
                {...register("email", registerRules.email)}
            />
            <TextField 
                label="Пароль"
                error={errors.password?.message}
                {...register("password", registerRules.password)}
            />
            <TextField 
                label="Подтверждение пароля"
                error={errors.confirm?.message}
                {...register("confirm", registerRules.confirm)}
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