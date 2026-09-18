import React, { type FC } from "react";

import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Benefits from "@/sections/Benefits";

const HomePage: FC = (): React.JSX.Element => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Benefits />
            </main>

        </>
    
    );
};

export default HomePage;