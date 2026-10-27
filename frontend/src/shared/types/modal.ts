export type ServiceModalState<T> = 
    | { type: "add" }
    | { type: "edit", service: T }
    | null