import React, { type FC } from "react";

import styles from "./UserCard.module.scss";
import { useUserContext } from "../model/useUserContext";

const UserCard: FC = (): React.JSX.Element => {
    
    const { user } = useUserContext();

    return (
        <section className={styles["user-card"]}>
            <div className={styles.avatar}>
                <span>{user?.fullname[0]}</span>
            </div>

            <div>
                <h3 className={styles["full-name"]}>
                    {user?.fullname}
                </h3>

                <div className={styles["user-card__meta"]}>
                    <div>
                        <dt>Логин</dt>
                        <dd>{user?.login}</dd>
                    </div>
                    <div>
                        <dt>Почта</dt>
                        <dd>{user?.email}</dd>
                    </div>
                </div>
            </div>
            
            <span className={styles.badge}>
                Аккаут активен
            </span>
        </section>
    );
};

export default UserCard;