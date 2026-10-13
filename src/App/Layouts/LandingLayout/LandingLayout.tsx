import React, { type FC } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../../../widgets/Header";
import Footer from "../../../widgets/Footer";

import styles from "./LandingLayout.module.scss";

const Layout: FC = (): React.JSX.Element => {

    // хук, который получает информацию о текущем URL
    const location = useLocation();

    return (
        <>
            <Header />
            <main
                // всякий раз, когда pathname будет меняться,
                // это будет новый компонент
                key={location.pathname}
                className={styles.page}
            >
                {/* место, где будет вставлен элемент из дочернего маршрута*/}
               <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;