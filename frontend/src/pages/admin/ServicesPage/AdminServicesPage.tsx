import React, { type FC } from "react";

import type { Service } from "@/entities/Service";

import { staticServices } from "@/entities/Service";
import ServicesCatalog from "@/widgets/ServicesCatalog";
import Button from "@/shared/components/Button";

import PlusIcon from "@/shared/icons/PlusIcon";
import EditIcon from "@/shared/icons/EditIcon";
import TrashIcon from "@/shared/icons/TrashIcon";

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
                <Button variant="primaryButton" onClick={() => handleEdit(service)}>
                    <EditIcon />
                </Button>

                <Button variant="primaryButton" onClick={() => handleDelete(service.id)}>
                    <TrashIcon />
                </Button>
            </>
        );
    };

    return (
        <ServicesCatalog 
            services={staticServices} 
            renderActions={renderServiceActions}
            toolbar={
                <Button variant="primaryButton"><PlusIcon />Добавить услугу</Button>
            }
        />
    );
};

export default AdminServicesPage;
