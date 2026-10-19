import { type RegisterPayload, type LoginPayload } from "./types";

const headers = {
    "Content-Type": "application/json"
}

const URL = "http://localhost:3000";

const parseResponse = async (response: Response) => {
    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message || "Ошибка запроса к серверу");
    }

    return result;
}

const API = {
    registerUser: (data: RegisterPayload) => {
        return fetch(`${URL}/api/auth/register`, {
            method: "POST",
            credentials: "include",
            headers,
            body: JSON.stringify({
                login: data.login,
                email: data.email,
                fullname: data.fullname,
                password: data.password
            })
        }).then(parseResponse)
    },

    loginUser: (data: LoginPayload) => {
        return fetch(`${URL}/api/auth/login`, {
            method: "POST",
            credentials: "include",
            headers,
            body: JSON.stringify({
                login: data.login,
                password: data.password
            })
        }).then(parseResponse)
    },

    getCurrentUser: () => {
        return fetch(`${URL}/api/users/me`, {
            method: "GET",
            credentials: "include"
        }).then(parseResponse)
    },

    logoutUser: () => {
         return fetch(`${URL}/api/auth/logout`, {
            method: "POST",
            credentials: "include"
        }).then(parseResponse)
    }
}

export default API;