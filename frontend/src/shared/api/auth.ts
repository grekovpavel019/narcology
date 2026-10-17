export type RegisterPayload = {
    login: string;
    email: string;
    fullname: string;
    password: string;
}

export type LoginPayload = {
    login: string;
    password: string;
}

type ApiResponse = {
    message: string;
}

export async function registerUser(
    data: RegisterPayload
): Promise<ApiResponse> {
    const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            login: data.login,
            email: data.email,
            fullname: data.fullname,
            password: data.password
        })
    });

    const result: ApiResponse = await response.json();

    if (!response.ok) {
        throw new Error(result.message || "Ошибка регистрации");
    }

    return result;
}

export async function loginUser(
    data: LoginPayload
): Promise<ApiResponse> {
    const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json", 
        },
        body: JSON.stringify({
            login: data.login,
            password: data.password
        })
    });

    const result: ApiResponse = await response.json();

    if (!response.ok) {
        throw new Error(result.message || "Ошибка входа")
    }
    
    return result;
}