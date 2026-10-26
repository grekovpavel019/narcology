import React, { type FC, useState } from "react";

import type { Service } from "@/entities/Service";

import { staticServices } from "@/entities/Service";
import ServicesCatalog from "@/widgets/ServicesCatalog";
import Button from "@/shared/components/Button";

import PlusIcon from "@/shared/icons/PlusIcon";
import EditIcon from "@/shared/icons/EditIcon";
import TrashIcon from "@/shared/icons/TrashIcon";
import AddServiceForm from "@/features/add-service";

const AdminServicesPage: FC = (): React.JSX.Element => {
    
    const [isAddServiceFormOpen, setIsAddServiceOpen] = useState<boolean>(false)

    const handleDelete = (id: Service["id"]) => {
        console.log(1);
    }

    const handleEdit = (service: Service) => {
        console.log(2);
    }

    const handleAdd = () => {
        setIsAddServiceOpen(true);
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
        <>
            <ServicesCatalog 
                services={staticServices} 
                renderActions={renderServiceActions}
                toolbar={
                    <Button onClick={() => handleAdd()} variant="primaryButton"><PlusIcon />Добавить услугу</Button>
                }
            />

            {
                isAddServiceFormOpen && 
                <AddServiceForm 
                    setIsAddServiceOpen={setIsAddServiceOpen}
                />
            }
        </>
    );
};

export default AdminServicesPage;
