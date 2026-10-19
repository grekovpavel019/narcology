import React, { useEffect, type FC } from "react";

import { useState } from "react";

import TextField from "@/shared/components/TextField";
import Button from "@/shared/components/Button";
import LinkButton from "@/shared/components/LinkButton";

import styles from './ChangeDataForm.module.scss';
import { useUserContext } from "@/entities/User/model/useUserContext";

const ChangeDataForm: FC = (): React.JSX.Element => {

    const { user, updateUser } = useUserContext();

    const [newUserData, setNewUserData] = useState({
        fullname: "",
        email: ""
    });

    useEffect(() => {
        if (!user) return;

        setNewUserData({
            email: user?.email,
            fullname: user?.fullname
        })
    }, [user])

    const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await updateUser({
                fullname: newUserData.fullname,
                email: newUserData.email
            }) 

        } catch (e) {
            console.error(e)
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.form__grid}>
                <TextField 
                    label="Логин"
                    hint="Логин изменить нельзя"
                    value={user?.login ?? ""}
                    disabled
                />

                <TextField 
                    label="ФИО"
                    value={newUserData.fullname}
                    onChange={
                        (event) => setNewUserData((prev) => ({
                            ...prev,
                            fullname: event.target.value
                        }))
                    }
                />

                <TextField 
                    label="Электронная почта"
                    value={newUserData.email}
                    onChange={
                        (event) => setNewUserData((prev) => ({
                            ...prev,
                            email: event.target.value
                        }))
                    }
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

            <div className={styles.form__actions}>
                <Button type="submit" variant="primaryButton">Сохранить изменения</Button>
                <Button onClick={() => setNewUserData({
                    email: user?.email ?? "",
                    fullname: user?.fullname ?? ""
                })} variant="secondaryButton">Отменить</Button>
            </div>

        </form>
    );
};

export default ChangeDataForm;