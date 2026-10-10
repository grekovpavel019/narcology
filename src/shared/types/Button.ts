export type ButtonVariant = 
    "primaryButton"
    | "secondaryButton" 
    | "inlineButton"
    | "blueText";

export type LinkProps = {
    variant: ButtonVariant,
    children: string,
    to: string
}

export type ButtonProps = {
    children: string;
    variant: ButtonVariant;
} & (
    {
        type: "submit";
        onClick?: never;
    }
    | {
        type?: "button";
        onClick: () => void;
    }
)

export type NavLinkProps = Omit<LinkProps, "variant"> & {
    variant: ButtonVariant | "navLinkButton";
    end?: boolean;
}

export type BurgerButtonProps = {
    isOpen: boolean;
    onClick: () => void;
}