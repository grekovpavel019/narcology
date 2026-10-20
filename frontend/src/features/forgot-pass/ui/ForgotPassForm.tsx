import React from "react";

import TextField from "@/shared/components/TextField";
import Button from "@/shared/components/Button";

import { useForm } from "react-hook-form";

import styles from "./ForgotPassForm.module.scss";

const ForgotPassForm = (): React.JSX.Element => {

    const {
        register, 
        formstate: {
            errors
        }
    } = useForm();

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form__grid}>
                <TextField 
                    error={errors.confirm?.message}
                    // {...register("confirm", changePasswordRules.confirm)}
                    label="Подтверждение пароля"
                    type="email"
                />

            </div>

            <div className={styles.form__actions}>
                <Button type="submit" variant="primaryButton">Изменить пароль</Button>
            </div>

        </form>
    );
};

export default ForgotPassForm;