import React, { type FC } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

const Layout: FC = (): React.JSX.Element => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;