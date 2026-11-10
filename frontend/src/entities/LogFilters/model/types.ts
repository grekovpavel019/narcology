export type ActionFilter =
    | "all"
    | "register"
    | "login"
    | "logout"
    | "page_view"
    | "profile_update"
    | "password_change"
    | "service_created"
    | "service_update"
    | "service_delete";

export type Sort = 
    | "time"
    | "id"
    | "userId"
    | "action"

export type Order = 
    | "asc"
    | "desc"

export type LogItem = {
    id: number;
    user_id: number;
    action: string;
    target: string;
    ip: string;
    created_at: string;
};