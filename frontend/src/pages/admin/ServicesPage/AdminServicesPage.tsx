import React, { type FC, useState } from "react";

import type { Service } from "@/entities/Service";

import { staticServices } from "@/entities/Service";
import ServicesCatalog from "@/widgets/ServicesCatalog";
import Button from "@/shared/components/Button";

import PlusIcon from "@/shared/icons/PlusIcon";
import EditIcon from "@/shared/icons/EditIcon";
import TrashIcon from "@/shared/icons/TrashIcon";
import ServiceForm from "@/features/add-service";

import type { ServiceModalState } from "@/shared/types/modal";

const AdminServicesPage: FC = (): React.JSX.Element => {

    const [services, setServices] = useState<Service[]>(staticServices);
    
    const [modal, setModal] = useState<ServiceModalState<Service>>(null);

    const handleAdd = () => {
        setModal({ type: "add" })
    }

    const handleEdit = (service: Service) => {
        setModal({ type: "edit", service})
    }

    const handleDelete = (id: Service["id"]) => {

    }

    const onClose = () => {
        setModal(null);
    }

    const onSubmit = () => {
        // console.log(values)
        console.log(123);
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
                services={services} 
                renderActions={renderServiceActions}
                toolbar={
                    <Button onClick={() => handleAdd()} variant="primaryButton"><PlusIcon />Добавить услугу</Button>
                }
            />

            {
                modal?.type === "add" &&
                <ServiceForm
                    onClose={onClose} 
                    onSubmit={onSubmit}
                />
            }

            {
                modal?.type === "edit" &&
                <ServiceForm
                    onClose={onClose} 
                    onSubmit={onSubmit}
                    service={modal.service}
                />
            }
        </>
    );
};

export default AdminServicesPage;
