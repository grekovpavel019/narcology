export type SelectOption<T extends string> = {
    value: T;
    label: string;
}

export type SelectProps<T extends string> = {
    options: SelectOption<T>[];
    value: T;
    onChange: (value: T) => void;
}