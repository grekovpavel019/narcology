import React from "react";
import Title from "@/shared/components/typography/Title";

import Statisctics from "@/widgets/Statisctics";
import LogData from "@/widgets/LogData";

import styles from "./AdminStatisticsPage.module.scss";

const AdminStatisticsPage = (): React.JSX.Element => {
    return (
        <>
            <div className="container">
                <Title variant="h2">Статистика</Title>
                
                <Statisctics />

                <LogData />
            </div>
        </>
    );
};

export default AdminStatisticsPage;