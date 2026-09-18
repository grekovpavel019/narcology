import React, { type FC } from "react";

import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Benefits from "@/sections/Benefits";
import Services from "@/sections/Services";

const HomePage: FC = (): React.JSX.Element => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Benefits />
                <Services />
            </main>

        </>
    
    );
};

export default HomePage;