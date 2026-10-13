export type Service = {
    id: number,
    description: string,
    sub: string,
    price: number,

    category: 
        | "Консультация"
        | "Детоксикация"
        | "Лечение"
        | "Реабилитация",


    audience:
        | "Пациент"
        | "Родственники"
        | "Сопровождающий",

    
    format:
        | "В клинике"
        | "На дому"
        | "Амбулаторно"
        | "В стационаре"
}

export type SortVariants = 
    | "default"
    | "expensive"
    | "cheap"
    | "alphabet"

export type Filters = {
    category: string[],
    audience: string[],
    format: string[]
}