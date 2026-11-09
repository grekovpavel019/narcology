export type GroupBy = "day" | "hour" | "week" | "month";

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

export type StatisticsSort = "period" | "quantity";

export type SortOrder = "asc" | "desc";

export type StatisticsItem = {
    period: string;
    quantity: number;
};