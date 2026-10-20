import { useCallback, useEffect, useState } from "react";

import { type User, type AuthStatus} from "./types";
import API from "@/shared/api/api";
import type { ChangePasswordPayload, LoginPayload, RegisterPayload, UpdateUserPayload } from "@/shared/api/types";


export const useUser = () => {
    const [user, setUser] = useState<User | null>(null);
    const [status, setStatus] = useState<AuthStatus>("loading");

    const checkUser = useCallback(() => {
        setStatus("loading");

        API.getCurrentUser()
            .then((result) => {
                setUser(result.user)
                setStatus("authenticated");
            })
            .catch((error: unknown) => {
                setUser(null);

                if (
                    error instanceof Error &&
                    error.message === "Не авторизован"
                ) {
                    setStatus("unauthenticated");
                    return
                }

                console.error(error);
                setStatus("error");
            })
    }, []);

    const login = useCallback(async (data: LoginPayload) => {
        await API.loginUser(data);

        const result = await API.getCurrentUser();

        setUser(result.user);
        setStatus("authenticated");
    }, []);

    const register = useCallback(async (data: RegisterPayload) => {
        await API.registerUser(data);

        const result = await API.getCurrentUser();
        setUser(result.user);
        setStatus("authenticated");
    }, [])

    const logout = useCallback(async () => {
        await API.logoutUser();

        setUser(null);
        setStatus("unauthenticated");
    }, [])

    const updateUser = useCallback(async (data: UpdateUserPayload) => {
        const result = await API.updateCurrentUser(data);

        setUser(result.user);
        setStatus("authenticated");
    }, []);

    const changePassword = useCallback(async (data: ChangePasswordPayload) => {
        await API.changePassword(data);
    }, [])

    useEffect(() => {
        checkUser()
    }, []);

    return {
        user,
        status,
        checkUser,
        login,
        register,
        logout,
        updateUser,
        changePassword
    }
}