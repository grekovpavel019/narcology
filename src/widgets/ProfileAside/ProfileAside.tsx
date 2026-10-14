import React, { type FC } from "react";

import NavLinkButton from "@/shared/components/NavLinkButton";
import Button from "@/shared/components/Button";

import styles from "./ProfileAside.module.scss";

const ProfileAside: FC = (): React.JSX.Element => {
    return (
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
    );
};

export default ProfileAside;