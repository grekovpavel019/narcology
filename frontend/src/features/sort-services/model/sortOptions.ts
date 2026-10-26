import type { SelectOption } from "@/shared/components/Select/model/types";

import type { ServiceSortKey } from "./types";

export const SORT_OPTIONS: SelectOption<ServiceSortKey>[] = [
    { value: "default", label: "По умолчанию"},
    { value: "expensive", label: "Сначала дорогие"},
    { value: "cheap", label: "Сначала дешевые"},
    { value: "alphabet", label: "По алфавиту"}
];
