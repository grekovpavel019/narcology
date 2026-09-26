import React, { type FC } from "react";

import Benefits from "@/sections/Benefits";
import Overview from "@/sections/Overview";
import Showcase from "@/sections/Showcase";

const AboutPage: FC = (): React.JSX.Element => {
    return (
        <>
            <Overview />
            <Showcase />
            <Benefits />
        </>
    );
};

export default AboutPage;