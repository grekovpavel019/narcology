import type { SelectOption } from "@/shared/components/Select/model/types"
import type { SortVariants } from "./types"

export const SORT_OPTIONS: SelectOption<SortVariants>[] = [
    { value: "default", label: "По умолчанию"},
    { value: "expensive", label: "Сначала дорогие"},
    { value: "cheap", label: "Сначала дешевые"},
    { value: "alphabet", label: "По алфавиту"}
]