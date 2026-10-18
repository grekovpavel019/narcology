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