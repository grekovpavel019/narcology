import React, { type FC } from "react";

type InputFieldProps = {
    id: string;
    label: string;
    children: React.ReactNode;
}

const InputField = (props: InputFieldProps): React.JSX.Element => {
    const {
        id,
        label,
        children
    } = props;

    return (
        <div>
            <label htmlFor={id}>{label}</label>

            {children}
        </div>
    );
};

export default InputField;