import React, { type FC } from "react";

import TextField from "@/shared/components/TextField";
import LinkButton from "@/shared/components/LinkButton";
import Button from "@/shared/components/Button";

import styles from "./ChangePassForm.module.scss";

const ChangePassForm: FC = (): React.JSX.Element => {
    return (
        <form className={styles.form}>
            <div className={styles.form__grid}>
                <TextField 
                    label="Текущий пароль"
                    endSlot={
                        <LinkButton variant="blueText" to="/register">Забыли пароль?</LinkButton>
                    }
                />

                <TextField 
                    label="Новый пароль"
                    hint="Минимум 8 символов, буквы и цифры."
                />

                <TextField 
                    label="Подтверждение пароля"
                />

            </div>

            <div className={styles.form__actions}>
                <Button onClick={() => console.log(1)} variant="primaryButton">Изменить пароль</Button>
            </div>

        </form>
    );
};

export default ChangePassForm;