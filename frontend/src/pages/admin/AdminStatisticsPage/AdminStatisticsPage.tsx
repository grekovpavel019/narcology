import React from "react";
import Title from "@/shared/components/typography/Title";

import Statisctics from "@/widgets/Statisctics";

import styles from "./AdminStatisticsPage.module.scss";


const AdminStatisticsPage = (): React.JSX.Element => {

    return (
        <>
            <div className="container">
                <Title variant="h2">Статистика</Title>
                
                <Statisctics />

                <section>
                    <Title variant="h3">Журнал действий</Title>

                    
                </section>
            </div>
        </>
    );
};

export default AdminStatisticsPage;