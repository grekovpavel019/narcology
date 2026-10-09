import React, { type FC } from "react";

import Hero from "@/widgets/Hero";
import Benefits from "@/widgets/Benefits";
import Services from "@/widgets/Services";

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