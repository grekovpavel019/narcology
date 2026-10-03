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

export type sortVariants = 
    | "default"
    | "expensive"
    | "cheap"
    | "alphabet"