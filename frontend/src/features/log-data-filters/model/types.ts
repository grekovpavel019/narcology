import type { ActionFilter, Sort, Order } from "@/entities/LogFilters/model/types"

export type LogDataFormState = {
    action: ActionFilter;
    sort: Sort;
    order: Order;
}