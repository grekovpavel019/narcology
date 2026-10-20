import React, { useState, type FC } from "react";

import TextField from "@/shared/components/TextField";
import LinkButton from "@/shared/components/LinkButton";
import Button from "@/shared/components/Button";

import styles from "./ChangePassForm.module.scss";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { ChangePasswordValues } from "../model/types";
import { changePasswordRules } from "../model/rules";
import { useUserContext } from "@/entities/User/model/useUserContext";

const ChangePassForm: FC = (): React.JSX.Element => {

    const { changePassword } = useUserContext();

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<ChangePasswordValues>();

    const [serverError, setServerError] = useState("");

    const onSubmit: SubmitHandler<ChangePasswordValues> = async (data: ChangePasswordValues) => {
        setServerError("");

        try {
            await changePassword({
                currentPassword: data.currentPassword,
                newPassword: data.newPassword
            });
        } catch (e) {
            setServerError(e instanceof Error ? e.message : "Не удалось изменить пароль")
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form__grid}>
                <TextField 
                    label="Текущий пароль"
                    error={errors.currentPassword?.message}
                    {...register("currentPassword", changePasswordRules.currentPassword)}
                    endSlot={
                        <LinkButton variant="blueText" to="/register">Забыли пароль?</LinkButton>
                    }
                />

                <TextField 
                    label="Новый пароль"
                    error={errors.newPassword?.message}
                    {...register("newPassword", changePasswordRules.newPassword)}
                    hint="Минимум 8 символов, буквы и цифры."
                />

                <TextField 
                    error={errors.confirm?.message}
                    {...register("confirm", changePasswordRules.confirm)}
                    label="Подтверждение пароля"
                />

            </div>

            {serverError && (
                <p className={styles.alert}>{serverError}</p>
            )}

            <div className={styles.form__actions}>
                <Button type="submit" variant="primaryButton">Изменить пароль</Button>
            </div>

        </form>
    );
};

export default ChangePassForm;