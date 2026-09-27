import React, { type FC } from "react";

import Services from "@/sections/Services";
import Overview from "@/sections/Overview";
import ServicesTable from "@/sections/ServicesTable";


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