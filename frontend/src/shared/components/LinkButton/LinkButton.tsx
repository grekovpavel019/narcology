import React, { type FC } from "react";

import { Link } from "react-router-dom";

import type { LinkProps } from "@/shared/types/Button";

const LinkButton: FC<LinkProps> = (props: LinkProps): React.JSX.Element => {

    const {
        variant,
        children,
        to
    } = props;

    return (
        <Link
            to={to}
            className={variant}
        >
            {children}
        </Link>
    );
};

export default LinkButton;