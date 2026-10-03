import React, { type FC } from "react";

import Hero from "@/sections/Hero";
import Benefits from "@/sections/Benefits";
import Services from "@/sections/Services";

const HomePage: FC = (): React.JSX.Element => {
    return (
        <>
            <Hero />
            <Benefits />
            <Services />
        </>
    );
};

export default HomePage;