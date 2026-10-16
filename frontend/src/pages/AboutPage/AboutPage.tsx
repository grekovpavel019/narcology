import React, { type FC } from "react";

import Benefits from "@/widgets/Benefits";
import Overview from "@/widgets/Overview";
import Showcase from "@/widgets/Showcase";

const AboutPage: FC = (): React.JSX.Element => {
    return (
        <>
            <Overview
                title='О клинике "Алкоклиник"'
                path="О клинике"
            > 
                Частная клиника, специализирующаяся на помощи людям с алкогольной зависимостью и их родственникам — от первичной консультации до восстановления.
            </Overview>
            <Showcase />
            <Benefits />
        </>
    );
};

export default AboutPage;