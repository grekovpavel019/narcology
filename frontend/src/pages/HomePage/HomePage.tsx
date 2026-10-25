import React, { type FC } from "react";

import Hero from "@/widgets/Hero";
import Benefits from "@/widgets/Benefits";
import ServiceDirections from "@/widgets/ServicesDirections";

const HomePage: FC = (): React.JSX.Element => {

    return (
        <>
            <Hero />
            <Benefits />
            <ServiceDirections />
        </>
    );
};

export default HomePage;