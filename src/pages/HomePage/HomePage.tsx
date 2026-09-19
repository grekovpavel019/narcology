import React, { type FC } from "react";

import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Benefits from "@/sections/Benefits";
import Services from "@/sections/Services";
import Location from "@/sections/Location";
import Footer from "@/sections/Footer";

const HomePage: FC = (): React.JSX.Element => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Benefits />
                <Services />
                <Location />
                <Footer />
            </main>

        </>
    
    );
};

export default HomePage;