import React, { useEffect, type FC } from "react";

import TextField from "@/shared/components/TextField";
import Button from "@/shared/components/Button";
import LinkButton from "@/shared/components/LinkButton";

import { useState } from "react";

import styles from './ChangeDataForm.module.scss';
import { useUserContext } from "@/entities/User/model/useUserContext";
import { useForm, type SubmitHandler } from "react-hook-form";
import { changeDataRules } from "../model/rules";
import type { ChangeDataFormValues } from "../model/types";

const ChangeDataForm: FC = (): React.JSX.Element => {

    const { user, updateUser } = useUserContext();

    const [serverError, setServerError] = useState("");

    const { 
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<ChangeDataFormValues>({
        defaultValues: {
            fullname: "",
            email: ""
        }
    });

    useEffect(() => {
        if (!user) return;

        reset({
            fullname: user.fullname,
            email: user.email
        })
    }, [user]);

    const onSubmit: SubmitHandler<ChangeDataFormValues> = async (data: ChangeDataFormValues) => {

        setServerError("");

        if (!user) return;
        console.log(data.email, user.email)
        console.log(data.fullname, user.fullname)

        if (user.email === data.email && user.fullname === data.fullname) return;

        try {
            await updateUser({
                fullname: data.fullname,
                email: data.email
            }) 

        } catch (e) {
            setServerError(e instanceof Error ? e.message : "Не удалось выполнить запрос");
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.form__grid}>
                <TextField 
                    label="Логин"
                    hint="Логин изменить нельзя"
                    value={user?.login ?? ""}
                    disabled
                />

                <TextField 
                    label="ФИО"
                    {...register("fullname", changeDataRules.fullname)}
                    error={errors.fullname?.message}
                />

                <TextField 
                    label="Электронная почта"
                    {...register("email", changeDataRules.email)}
                    error={errors.email?.message}
                />
                
                <TextField 
                    label="Пароль"
                    endSlot={
                        <LinkButton variant="blueText" to="/register">Забыли пароль?</LinkButton>
                    }
                    disabled
                    value="***********"
                />
            </div>

            {serverError &&
                <p className={styles.alert}>{serverError}</p>
            }

            <div className={styles.form__actions}>
                <Button type="submit" variant="primaryButton">Сохранить изменения</Button>
                <Button type="button" onClick={() => reset()} variant="secondaryButton">Отменить</Button>
            </div>

        </form>
    );
};

export default ChangeDataForm;