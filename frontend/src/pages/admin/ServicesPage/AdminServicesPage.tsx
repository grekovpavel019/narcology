import React, { type FC, useState } from "react";

import type { Service } from "@/entities/Service";

import { staticServices } from "@/entities/Service";
import ServicesCatalog from "@/widgets/ServicesCatalog";
import Button from "@/shared/components/Button";

import PlusIcon from "@/shared/icons/PlusIcon";
import EditIcon from "@/shared/icons/EditIcon";
import TrashIcon from "@/shared/icons/TrashIcon";
import AddServiceForm from "@/features/add-service";

import type { ServiceModalState } from "@/shared/types/modal";

const AdminServicesPage: FC = (): React.JSX.Element => {
    
    const [modal, setModal] = useState<ServiceModalState<Service>>(null);

    const handleAdd = () => {
        setModal({ type: "add"})
    }

    const handleEdit = (service: Service) => {
        console.log(2);
    }

    const handleDelete = (id: Service["id"]) => {
        console.log(1);
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

            {/* {
                modal?.type === "add" &&
            } */}
            <AddServiceForm setModal={setModal} />
        </>
    );
};

export default AdminServicesPage;
