import React, { type FC } from "react";

import type { ButtonLinkProps } from "@/shared/types/Button";

const LinkButton: FC<ButtonLinkProps> = (props: ButtonLinkProps): React.JSX.Element => {
    
    const {
        variant,
        children,
    } = props;

    return (
        <a className={`${variant}`}>
            {children}
        </a>
    );
};

export default LinkButton;