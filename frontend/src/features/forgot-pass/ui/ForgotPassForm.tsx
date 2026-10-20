import React, { useState } from "react";
import API from "@/shared/api/api";

import TextField from "@/shared/components/TextField";
import Button from "@/shared/components/Button";

import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

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

    const [serverError, setServerError] = useState("");

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<ForgotPasswordValues> = async ({ email }) => {
        setServerError("");

        try {
            const result = await API.forgotPassword({ email });

            if (!result.resetUrl) {
                return;
            }

            const resetUrl = new URL(result.resetUrl);
            console.log(resetUrl);

            if (resetUrl.origin !== window.location.origin) {
                throw new Error("Получена некорректная ссылка");
            }

            // navigate(`${resetUrl.pathname}${resetUrl.search}`);
        } catch (e) {
            setServerError(
                e instanceof Error ? e.message : "Не удалось отправить запрос"
            );
        }
    };

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

            {serverError && (
                <p className={styles.alert}>{serverError}</p>
            )}

        </form>
    );
};

export default ForgotPassForm;