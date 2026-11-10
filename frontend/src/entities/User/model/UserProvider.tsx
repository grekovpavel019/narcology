import type React from "react";

import { UserContext } from "./UserContext";
import { useUser } from "./useUser";

type UserProviderProps = {
    children: React.ReactNode;
};

const UserProvider = (props: UserProviderProps): React.JSX.Element => {
    const { children } = props;

    const {
        user,
        status,
        login,
        register,
        logout,
        updateUser,
        changePassword
    } = useUser();

    return (
        <UserContext.Provider
            value={{ user, status, login, register, logout, updateUser, changePassword }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;