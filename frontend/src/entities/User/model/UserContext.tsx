import { createContext } from "react";

import type { UserContextValue } from "./types";
import { useUser } from "./useUser";

type UserProviderProps = {
    children: React.ReactNode;
}

export const UserContext = createContext<UserContextValue | null>(null);

export const UserProvider = (props: UserProviderProps): React.JSX.Element => {
    const { children } = props;

    const {
        user,
        status,
        login,
        register,
        logout
    } = useUser();

    return (
        <UserContext.Provider 
            value={{ user, status, login, register, logout, updateUser }}
        >
            {children}
        </UserContext.Provider>
    )
};

export default UserProvider;