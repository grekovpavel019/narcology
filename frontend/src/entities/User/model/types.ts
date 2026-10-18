export type User = {
    id: string;
    email: string;
    login: string;
    fullname: string;
}

export type AuthStatus = "loading" | "authenticated" | "unauthenticated" | "error";

export type UserContextValue = {
    user: User | null;
    status: AuthStatus;
}