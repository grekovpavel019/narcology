import type { SelectOption } from "@/shared/components/Select/model/types";
import type { ActionFilter, Order, Sort } from "./types";

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

export const sortOptions = [
    { label: "Время", value: "time" },
    { label: "ID", value: "id" },
    { label: "ID пользователя", value: "userId" },
    { label: "Действие", value: "action" },
] satisfies SelectOption<Sort>[];

export const orderOptions = [
    { value: "asc", label: "По возрастанию" },
    { value: "desc", label: "По убыванию" },
] satisfies SelectOption<Order>[];
