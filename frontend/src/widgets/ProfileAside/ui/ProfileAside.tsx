import React, { type FC } from "react";

import NavLinkButton from "@/shared/components/NavLinkButton";
import Button from "@/shared/components/Button";

import { useNavigate } from "react-router-dom";
import { useUserContext } from "@/entities/User/model/useUserContext";

import { profileNavItems, adminNavItems } from "../model/asideNavItems";

import styles from "./ProfileAside.module.scss";

type ProfileAsideProps = {
    isAdmin: boolean;
}

const ProfileAside = ({ isAdmin }: ProfileAsideProps): React.JSX.Element => {

    const { logout } = useUserContext();
    const navigate = useNavigate();

    const handleLogout = async () => {
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
                {
                    (isAdmin ? adminNavItems : profileNavItems).map(({ to, label, end }) => (
                        <NavLinkButton key={to} variant="navLinkButton" to={to} end={end}>{label}</NavLinkButton>
                    ))
                }

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