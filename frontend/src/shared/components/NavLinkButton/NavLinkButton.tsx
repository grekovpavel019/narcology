import React, { type FC } from "react";

import { NavLink } from "react-router-dom";

import type { NavLinkProps } from "@/shared/types/Button";

const NavLinkButton: FC<NavLinkProps> = (props: NavLinkProps): React.JSX.Element => {
    
    const {
        to,
        variant,
        children,
        end
    } = props;

    return (
        <NavLink
            to={to}
            className={`${variant}`}
            end={end}
        >
            {children}
        </NavLink>
    );
};

export default NavLinkButton;