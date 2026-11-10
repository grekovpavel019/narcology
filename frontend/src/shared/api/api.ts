import {
    type ForgotPasswordPayload,
    type ResetPasswordPayload,
    type RegisterPayload,
    type LoginPayload,
    type UpdateUserPayload,
    type ChangePasswordPayload,
    type CreateServicePayload,
    type UpdateServicePayload,
    type StatisticsFiltersPayload
} from "./types";

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
    },

    updateCurrentUser: (data: UpdateUserPayload) => {
        return fetch(`${URL}/api/users/me`, {
            method: "PATCH",
            credentials: "include",
            headers,
            body: JSON.stringify({
                fullname: data.fullname,
                email: data.email
            })
        }).then(parseResponse)
    },

    changePassword: (data: ChangePasswordPayload) => {
        return fetch(`${URL}/api/users/me/password`, {
            method: "PATCH",
            credentials: "include",
            headers,
            body: JSON.stringify({
                currentPassword: data.currentPassword,
                newPassword: data.newPassword
            })
        }).then(parseResponse)
    },

    forgotPassword: (data: ForgotPasswordPayload) => {
        return fetch(`${URL}/api/auth/forgot-password`, {
            method: "POST",
            credentials: "include",
            headers,
            body: JSON.stringify({
                email: data.email
            })
        }).then(parseResponse)
    },

    resetPassword: (data: ResetPasswordPayload) => {
        return fetch(`${URL}/api/auth/reset-password`, {
            method: "POST",
            credentials: "include",
            headers,
            body: JSON.stringify({
                token: data.token,
                newPassword: data.newPassword
            })
        }).then(parseResponse);
    },

    getServices: () => {
        return fetch (`${URL}/api/services`, {
            method: "GET",
            credentials: "include",
            headers
        }).then(parseResponse)
    },

    addService: (data: CreateServicePayload) => {
        return fetch (`${URL}/api/services`, {
            method: "POST",
            credentials: "include",
            headers,
            body: JSON.stringify(data)
        }).then(parseResponse)
    },

    updateService: (id: number, data: UpdateServicePayload) => {
        return fetch (`${URL}/api/services/${id}`, {
            method: "PATCH",
            credentials: "include",
            headers,
            body: JSON.stringify(data)
        }).then(parseResponse)
    },

    deleteService: (id: number) => {
        return fetch (`${URL}/api/services/${id}`, {
            method: "DELETE",
            credentials: "include",
            headers
        }).then(parseResponse)
    },

    sendPageView: (pathname: string) => {
        return fetch (`${URL}/api/actions/page-view`, {
            method: "POST",
            credentials: "include",
            headers,
            body: JSON.stringify({
                path: pathname
            })
        });
    },

    getStatistics: async (statisticsFilters: StatisticsFiltersPayload) => {
        const params = new URLSearchParams(statisticsFilters);

        return fetch(`${URL}/api/admin/statistics?${params.toString()}`, {
            credentials: "include",
            headers
        }).then(parseResponse)
    }
}

export default API;