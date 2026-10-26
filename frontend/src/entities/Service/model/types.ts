import type { SERVICE_AUDIENCES, SERVICE_CATEGORIES, SERVICE_FORMATS } from "./constants";

export type ServiceCategory = (typeof SERVICE_CATEGORIES)[number];
export type ServiceAudience = (typeof SERVICE_AUDIENCES)[number];
export type ServiceFormat = (typeof SERVICE_FORMATS)[number];

// Сохранённая услуга, как её отдаёт сервер
export type Service = {
    id: number;
    description: string;
    sub: string;
    price: number;
    category: ServiceCategory;
    audience: ServiceAudience;
    format: ServiceFormat;
};

// id назначает сервер, поэтому при создании его нет
export type CreateServiceInput = Omit<Service, "id">;

// Частичное обновление (PATCH): передаются только изменённые поля
export type UpdateServiceInput = Partial<CreateServiceInput>;
