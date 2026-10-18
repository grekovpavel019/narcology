import React, { type FC } from "react";

import NavLinkButton from "@/shared/components/NavLinkButton";
import Button from "@/shared/components/Button";

import { useNavigate } from "react-router-dom";
import { useUserContext } from "@/entities/User/model/useUserContext";

import styles from "./ProfileAside.module.scss";

const ProfileAside: FC = (): React.JSX.Element => {

    const { logout } = useUserContext();
    const navigate = useNavigate();

    const handleLogout = async () => {

        console.log(1)
        try {
            await logout();
            navigate("/", { replace: true })
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <aside className={styles.sidebar}>
            <nav className={styles.sidenav}>
                <NavLinkButton variant="navLinkButton" to="/profile" end>Профиль</NavLinkButton>
                <NavLinkButton variant="navLinkButton" to="/profile/settings">Настройки</NavLinkButton>  

                <Button
                    variant="primaryButton"
                    onClick={handleLogout}
                >
                    Выйти
                </Button>
            </nav>
        </aside>
    );
};

export default ProfileAside;