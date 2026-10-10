import React, { type FC } from "react";

import NavLinkButton from "@/shared/components/NavLinkButton";

import styles from "./ProfileLayout.module.scss";

const ProfileLayout: FC = (): React.JSX.Element => {
    return (
        <div className={styles.shell}>
            <aside className={styles.sidebar}>
                <nav className={styles.sidenav}>
                    <div>

                        <NavLinkButton variant="navLinkButton" to="/">Мой профиль</NavLinkButton>
                        <NavLinkButton variant="navLinkButton" to="/profile/settigs">Настройки</NavLinkButton>  
                    </div>

                    <Button></Button>
                </nav>
            </aside>

            <div className={styles.content}>
                хуй
            </div>
        </div>
    );
};

export default ProfileLayout;