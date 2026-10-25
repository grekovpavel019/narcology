import React from "react";

import { ServicesTable } from "@/entities/Service";
import CreateService from "@/features/add-service/ui";
import { useState } from "react";

const AdminServicesPage = (): React.JSX.Element => {

    const [isCreateServiceOpen, setIsCreateServiceOpen] = useState(false);

    return (
        <>
            <CreateService />
            <ServicesTable />
        </>
    );
};

export default AdminServicesPage;