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

export type NavLinkProps = LinkProps & {
    variant: ButtonVariant | "navLinkButton" 
    // onClick: () => void;
}

export type BurgerButtonProps = {
    isOpen: boolean;
    onClick: () => void;
}