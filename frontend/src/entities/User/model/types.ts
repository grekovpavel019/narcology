import type { LoginPayload, RegisterPayload, UpdateUserPayload } from "@/shared/api/types";

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
    login: (data: LoginPayload) => Promise<void>,
    register: (data: RegisterPayload) => Promise<void>,
    logout: () => Promise<void>,
    updateUser: (data: UpdateUserPayload) => Promise<void>
}