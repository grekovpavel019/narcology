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

export type CreateServicePayload = {
    description: string;
    sub?: string;
    price: number;
    category: string;
    audience: string;
    format: string;
}

export type UpdateServicePayload = Partial<CreateServicePayload>;

export type StatisticsFiltersPayload = {
    groupBy: string,
    action: string,
    order: string
}

export type LogsFiltersPayload = {
    sort: string,
    action: string,
    order: string
}