import { useEffect, useState } from "react";

import { type User, type AuthStatus} from "./types";
import { getCurrentUser } from "@/shared/api/auth";

export const useUser = () => {
    const [user, setUser] = useState<User | null>(null);
    const [status, setStatus] = useState<AuthStatus>("loading");

    useEffect(() => {
        getCurrentUser()
            .then((currentUser) => {
                setUser(currentUser)
                setStatus("authenticated")
            })
            .catch((error: unknown) => {
                setUser(null);

                if (
                    error instanceof Error &&
                    error.message === "Не авторизован"
                ) {
                    setStatus("unauthenticated");
                    return;
                }

                console.error(error);
                setStatus("error");
            });
    }, [])

    return {
        user,
        status
    }
}