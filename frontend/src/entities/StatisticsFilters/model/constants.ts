import type { SelectOption } from "@/shared/components/Select/model/types";
import type { GroupBy } from "./types";
import type { ActionFilter } from "./types";
import type { SortOrder } from "./types";

export const groupByOptions = [
    { value: "hour", label: "По часам" },
    { value: "day", label: "По дням" },
    { value: "week", label: "По неделям" },
    { value: "month", label: "По месяцам" },
] satisfies SelectOption<GroupBy>[];

export const actionOptions = [
    { value: "all", label: "Все действия" },
    { value: "register", label: "Регистрация" },
    { value: "login", label: "Вход" },
    { value: "logout", label: "Выход" },
    { value: "page_view", label: "Просмотр страницы" },
    { value: "profile_update", label: "Обновление профиля" },
    { value: "password_change", label: "Смена пароля" },
    { value: "service_created", label: "Создание услуги" },
    { value: "service_update", label: "Обновление услуги" },
    { value: "service_delete", label: "Удаление услуги" },
] satisfies SelectOption<ActionFilter>[];

export const sortOrderOptions = [
    { value: "asc", label: "По возрастанию" },
    { value: "desc", label: "По убыванию" },
] satisfies SelectOption<SortOrder>[];
