import React, { type FC } from "react";

import Services from "@/sections/Services";
import Overview from "@/sections/Overview";
import ServicesTable from "@/sections/ServicesTable";

import type { Service } from "@/shared/types/Service";

const ServicesPage: FC = (): React.JSX.Element => {

    const services: Service[] = [
        {
            id: 1,
            description: "Консультация нарколога",
            price: 2000
        },
        {
            id: 2,
            description: "Повторная консультация",
            price: 1500
        },
        {
            id: 3,
            description: "Консультация для родственников",
            price: 2000
        },
        {
            id: 4,
            description: "Выезд специалиста на дом",
            price: 3500
        },
        {
            id: 5,
            description: "Кодирование от алкоголя",
            price: 8000
        },
        {
            id: 6,
            description: "Капельница для снятия алкогольной интоксикации",
            price: 4500
        },
        {
            id: 7,
            description: "Прерывание запоя (в стационаре)",
            price: 6000
        },
        {
            id: 8,
            description: "Психологическая поддержка (сессия)",
            price: 3000
        },
        {
            id: 9,
            description: "Реабилитационная программа (базовый курс)",
            price: 15000
        },
        {
            id: 10,
            description: "Тестирование на содержание алкоголя",
            price: 1200
        }
    ];

    return (
        <>
            <Overview
                title="Услуги клиники"
                path="Услуги"
            >
                Каждое направление начинается с консультации специалиста, который поможет определить, какой формат помощи подходит именно вам.
            </Overview>

            <Services />
            <ServicesTable 
                services={services}
            />
        </>
    );
};

export default ServicesPage;