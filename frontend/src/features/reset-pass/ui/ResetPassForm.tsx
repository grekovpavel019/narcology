import React, { useState } from "react";
import API from "@/shared/api/api";

import TextField from "@/shared/components/TextField";
import Button from "@/shared/components/Button";

import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

import type { ResetPasswordValues } from "../model/types";
import { resetPasswordRules } from "../model/rules";

import styles from "./ResetPassForm.module.scss";

const ResetPassForm = (): React.JSX.Element => {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm<ResetPasswordValues>();

    const [serverError, setServerError] = useState("");
    const [message, setMessage] = useState("");

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const token = searchParams.get("token");

    const onSubmit: SubmitHandler<ResetPasswordValues> = async ({
        newPassword
    }) => {
        setServerError("");
        setMessage("");

        if (!token) {
            setServerError("В ссылке отсутствует токен восстановления");
            return;
        }

        try {
            await API.resetPassword({
                token,
                newPassword
            });

            setMessage("Пароль успешно изменён");
        } catch (e) {
            setServerError(
                e instanceof Error
                    ? e.message
                    : "Не удалось изменить пароль"
            );
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.reset__form}
        >
            <TextField
                type="password"
                error={errors.newPassword?.message}
                {...register("newPassword", resetPasswordRules.newPassword)}
                label="Новый пароль"
            />

            <TextField
                type="password"
                error={errors.confirmPassword?.message}
                {...register(
                    "confirmPassword",
                    resetPasswordRules.confirmPassword
                )}
                label="Подтвердите новый пароль"
            />

            <div className={styles.button__area}>
                {message ? (
                    <Button
                        type="button"
                        variant="primaryButton"
                        onClick={() => navigate("/login")}
                    >
                        Перейти ко входу
                    </Button>
                ) : (
                    <Button type="submit" variant="primaryButton">
                        Изменить пароль
                    </Button>
                )}
            </div>

            {serverError && (
                <p className={styles.alert}>{serverError}</p>
            )}

            {message && (
                <p className={styles.success}>{message}</p>
            )}
        </form>
    );
};

export default ResetPassForm;