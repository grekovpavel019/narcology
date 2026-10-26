import React, { type FC } from "react";

import type { Service } from "@/entities/Service";

import { staticServices } from "@/entities/Service";
import ServicesCatalog from "@/widgets/ServicesCatalog";

const AdminServicesPage: FC = (): React.JSX.Element => {
    
    const handleDelete = (id: Service["id"]) => {
        console.log(1);
    }

    const handleEdit = (service: Service) => {
        console.log(2);
    }

    const renderServiceActions = (service: Service): React.ReactNode => {
        return (
            <>
                <button onClick={() => handleEdit(service)}>
                    Редактировать
                </button>

                <button onClick={() => handleDelete(service.id)}>
                    Удалить
                </button>
            </>
        );
    };

    return (
        <ServicesCatalog services={staticServices} renderActions={renderServiceActions}/>
    );
};

export default AdminServicesPage;
