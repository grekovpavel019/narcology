import React, { type FC } from "react";

import Hero from "@/sections/Hero";
import Benefits from "@/sections/Benefits";
import Services from "@/sections/Services";
import Location from "@/sections/Location";

const HomePage: FC = (): React.JSX.Element => {
    return (
        <main>
            <Hero />
            <Benefits />
            <Services />
            <Location />
        </main>
    );
};

export default HomePage;