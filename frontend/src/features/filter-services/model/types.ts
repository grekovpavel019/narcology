import type { ServiceAudience, ServiceCategory, ServiceFormat } from "@/entities/Service";

export type ServiceFilterValues = {
    category: ServiceCategory[];
    audience: ServiceAudience[];
    format: ServiceFormat[];
}

export type ServiceFilterGroup = keyof ServiceFilterValues;

// Значение, которое можно выбрать в группе фильтров
export type ServiceFilterOption<G extends ServiceFilterGroup> = ServiceFilterValues[G][number];
