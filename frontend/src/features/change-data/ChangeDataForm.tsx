import React, { type FC } from "react";

import TextField from "@/shared/components/TextField";
import Button from "@/shared/components/Button";
import LinkButton from "@/shared/components/LinkButton";

import styles from './ChangeDataForm.module.scss';

const ChangeDataForm: FC = (): React.JSX.Element => {
    return (
        <form className={styles.form}>
            <div className={styles.form__grid}>
                <TextField 
                    label="Логин"
                    hint="Логин изменить нельзя"
                />

                <TextField 
                    label="ФИО"
                />

                <TextField 
                    label="Электронная почта"
                />
                
                <TextField 
                    label="Пароль"
                    endSlot={
                        <LinkButton variant="blueText" to="/register">Забыли пароль?</LinkButton>
                    }
                />
            </div>

            <div className={styles.form__actions}>
                <Button onClick={() => console.log(1)} variant="primaryButton">Сохранить изменения</Button>
                <Button onClick={() => console.log(2)} variant="secondaryButton">Отменить</Button>
            </div>

        </form>
    );
};

export default ChangeDataForm;