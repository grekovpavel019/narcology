import React, { type FC, type ComponentPropsWithRef } from "react";

export type ButtonProps = Omit<
    ComponentPropsWithRef<"button">,
    "className"
> & {
    variant: string;
};

const Button: FC<ButtonProps> = (props: ButtonProps): React.JSX.Element => {
    
    const {
        variant,
        children,
        type,
        onClick,
        ...rest
    } = props;

    return (
        <button
            className={variant}
            onClick={onClick}
            type={type}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;