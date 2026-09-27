export type Service = {
    id: number,
    description: string,
    price: number
}

export type sortVariants = 
    | "default"
    | "expensive"
    | "cheap"
    | "alphabet"