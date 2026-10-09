import React, { type FC } from "react";

import type { SubmitButtonProps } from "@/shared/types/Button";


const SubmitButton: FC<SubmitButtonProps> = (props: SubmitButtonProps): React.JSX.Element => {
    
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

export default SubmitButton;