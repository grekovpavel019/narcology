import type { Service } from "@/entities/Service"

export type ServiceFormValues = Omit<Service, "id">