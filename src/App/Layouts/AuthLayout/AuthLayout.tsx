import React, { type FC } from "react";

import { Outlet } from "react-router-dom";

import styles from "./AuthLayout.module.scss";

const AuthLayout: FC = (): React.JSX.Element => {
    return (
        <main className={styles.auth}>
            <Outlet />
        </main>
    );
};

export default AuthLayout;