import React, { type FC } from "react";

import styles from "./Footer.module.scss";

const Footer: FC = (): React.JSX.Element => {
    return (
        <footer className={`${styles.siteFooter}`}>
            <div className="container">
            бам бам

            </div>
        </footer>
    );
};

export default Footer;