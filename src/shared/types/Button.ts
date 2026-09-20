export type ButtonVariant = 
    "primaryButton"
    | "secondaryButton" 
    | "navLinkButton" 
    | "inlineButton";

export type ButtonLinkProps =
    | {
        variant: "navLinkButton";
        children: string;
        active?: boolean;
    }
    | {
        variant: "primaryButton" | "secondaryButton" | "inlineButton";
        children: string;
    };

export type BurgerButtonProps = {
    isOpen: boolean;
    onClick: () => void;
}