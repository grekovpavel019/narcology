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

export type UpdateUserPayload = {
    fullname: string;
    email: string;
}

export type ChangePasswordPayload = {
    currentPassword: string;
    newPassword: string;
}

export type ForgotPasswordPayload = {
    email: string;
}

export type ForgotPasswordResponse = {
    message: string;
    resetUrl?: string
}

export type ResetPasswordPayload = {
    token: string;
    newPassword: string;
}