import React, { type FC } from "react";

import styles from "./AuthLayout.module.scss";

import { Outlet } from "react-router-dom";

const AuthLayout: FC = (): React.JSX.Element => {
    
    return (
        <main 
            className={styles.auth}
        >
            <Outlet />
        </main>
    );
};

export default AuthLayout;