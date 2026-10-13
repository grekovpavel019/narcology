import React, { type FC } from "react";

import NavLinkButton from "@/shared/components/NavLinkButton";
import Button from "@/shared/components/Button";

import { Outlet } from "react-router-dom";

import styles from "./ProfileLayout.module.scss";

const ProfileLayout: FC = (): React.JSX.Element => {
    return (
        <div className={styles.shell}>
            <aside className={styles.sidebar}>
                <nav className={styles.sidenav}>
                    <div className={styles.sidenavLinks}>
                        <NavLinkButton variant="navLinkButton" to="/profile" end>Мой профиль</NavLinkButton>
                        <NavLinkButton variant="navLinkButton" to="/profile/settings">Настройки</NavLinkButton>  
                    </div>

                    <Button
                        variant="primaryButton"
                        onClick={() => console.log(1)}
                    >
                        Выйти
                    </Button>
                </nav>
            </aside>

            <div className={styles.content}>
                <Outlet />
            </div>
        </div>
    );
};

export default ProfileLayout;