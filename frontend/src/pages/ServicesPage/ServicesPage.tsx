import React, { type FC } from "react";

import Overview from "@/widgets/Overview";
import ServicesTable from "@/entities/Service/ui/ServicesTable"
import ServiceDirections from "@/widgets/ServicesDirections";

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
            <ServicesTable />
        </>
    );
};

export default ServicesPage;