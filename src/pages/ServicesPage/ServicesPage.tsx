import React, { type FC } from "react";

import Services from "@/widgets/Services";
import Overview from "@/widgets/Overview";
import ServicesTable from "@/widgets/ServicesTable";


const ServicesPage: FC = (): React.JSX.Element => {

    return (
        <>
            <Overview
                title="Услуги клиники"
                path="Услуги"
            >
                Каждое направление начинается с консультации специалиста, который поможет определить, какой формат помощи подходит именно вам.
            </Overview>

            <Services />
            <ServicesTable />
        </>
    );
};

export default ServicesPage;