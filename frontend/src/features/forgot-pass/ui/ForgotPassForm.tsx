import React from "react";

import TextField from "@/shared/components/TextField";
import Button from "@/shared/components/Button";

import { useForm, type SubmitHandler } from "react-hook-form";

import type { ForgotPasswordValues } from "../model/types";
import { forgotPasswordRules } from "../model/rules";

import styles from "./ForgotPassForm.module.scss";

const ForgotPassForm = (): React.JSX.Element => {

    const {
        register, 
        formState: {
            errors
        },
        handleSubmit
    } = useForm<ForgotPasswordValues>();

    const onSubmit: SubmitHandler<ForgotPasswordValues> = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.forgot__form}>
            <TextField 
                error={errors.email?.message}
                {...register("email", forgotPasswordRules.email)}
                label="Электронная почта"
            />

            <div className={styles.button__area}>
                <Button type="submit" variant="primaryButton">Изменить пароль</Button>
            </div>

        </form>
    );
};

export default ForgotPassForm;