import React, { type FC } from "react";

import { NavLink } from "react-router-dom";

import type { NavLinkProps } from "@/shared/types/Button";

const NavLinkButton: FC<NavLinkProps> = (props: NavLinkProps): React.JSX.Element => {
    
    const {
        to,
        variant,
        children,
    } = props;

    return (
        <NavLink
            to={to}
            className={`${variant}`}
        >
            {children}
        </NavLink>
    );
};

export default NavLinkButton;