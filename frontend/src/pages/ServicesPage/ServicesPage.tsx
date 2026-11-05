import React, { type FC } from "react";

import ServiceDirections from "@/widgets/ServicesDirections";
import Overview from "@/widgets/Overview";
import ServicesCatalog from "@/widgets/ServicesCatalog";
import { useServices } from "@/entities/Service/model/useServices";

const ServicesPage: FC = (): React.JSX.Element => {

    const { services } = useServices();

    return (
        <>
            <Overview
                title="Услуги клиники"
                path="Услуги"
            >
                Каждое направление начинается с консультации специалиста, который поможет определить, какой формат помощи подходит именно вам.
            </Overview>

            <ServiceDirections />
            <ServicesCatalog services={services} />
        </>
    );
};

export default ServicesPage;