import React, { type FC } from "react";

import type { ButtonProps } from "@/shared/types/Button";

const Button: FC<ButtonProps> = (props: ButtonProps): React.JSX.Element => {
    
    const {
        variant,
        children,
    } = props;

    return (
        <button
            className={variant}
            type="submit"
        >
            {children}
        </button>
    );
};

export default Button;