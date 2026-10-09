export type ButtonVariant = 
    "primaryButton"
    | "secondaryButton" 
    | "navLinkButton" 
    | "inlineButton";

export type LinkProps = {
    variant: ButtonVariant,
    children: string,
    to: string
}

export type SubmitButtonProps = {
    children: string;
    variant: ButtonVariant;
}

export type NavLinkProps = LinkProps & {
    variant: ButtonVariant | "navLinkButton" 
}

export type BurgerButtonProps = {
    isOpen: boolean;
    onClick: () => void;
}