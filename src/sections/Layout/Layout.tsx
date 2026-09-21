import React, { type FC } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

import styles from "./Layout.module.scss";

const Layout: FC = (): React.JSX.Element => {

    const location = useLocation();

    return (
        <>
            <Header />
            <main
                key={location.pathname}
                className={styles.page}
            >
               <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;