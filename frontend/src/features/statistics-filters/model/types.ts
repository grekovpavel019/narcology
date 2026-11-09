import type {
    GroupBy,
    ActionFilter,
    SortOrder
} from "@/entities/StatisticsFilters/model/types"

export type StatiscticsFiltersFormState = {
    groupBy: GroupBy,
    action: ActionFilter,
    order: SortOrder
}