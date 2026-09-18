import React, { type FC } from "react";

import type { Button } from "@/shared/types/Button";

const LinkButton: FC<Button> = (props: Button): React.JSX.Element => {
    
    const {
        variant,
        children
    } = props;

    return (
        <a className={`${variant}`}>
            {children}
        </a>
    );
};

export default LinkButton;