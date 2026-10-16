import React, { type FC } from "react";

import LinkButton from "@/shared/components/LinkButton";

import styles from "./Breadcrumb.module.scss";

type BreadcrumbProps = {
    children: string;
}

const Breadcrumb: FC<BreadcrumbProps> = (props: BreadcrumbProps): React.JSX.Element => {

    const {
        children
    } = props;
    
    return (
        <span
            className={styles.breadcrumb}
            ><LinkButton variant="inlineButton" to="/">Главная</LinkButton> / {children}
        </span>
    );
};

export default Breadcrumb;