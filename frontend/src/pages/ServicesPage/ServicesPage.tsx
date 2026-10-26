import React, { type FC } from "react";

import { staticServices } from "@/entities/Service";
import ServiceDirections from "@/widgets/ServicesDirections";
import Overview from "@/widgets/Overview";
import ServicesCatalog from "@/widgets/ServicesCatalog";

const ServicesPage: FC = (): React.JSX.Element => {

    return (
        <>
            <Overview
                title="Услуги клиники"
                path="Услуги"
            >
                Каждое направление начинается с консультации специалиста, который поможет определить, какой формат помощи подходит именно вам.
            </Overview>

            <ServiceDirections />
            <ServicesCatalog services={staticServices} />
        </>
    );
};

export default ServicesPage;