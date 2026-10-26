export { default as ServicesTable } from "./ui/ServicesTable";

export { staticServices } from "./model/staticServices";
export { SERVICE_CATEGORIES, SERVICE_AUDIENCES, SERVICE_FORMATS } from "./model/constants";

export type {
    Service,
    CreateServiceInput,
    UpdateServiceInput,
    ServiceCategory,
    ServiceAudience,
    ServiceFormat
} from "./model/types";
