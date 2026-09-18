import React, { type FC } from "react";

import Header from "@/sections/Header";
import Hero from "@/sections/Hero";

const HomePage: FC = (): React.JSX.Element => {
    return (
        <>
            <Header />
            <main>
                <Hero />
            </main>

        </>
    
    );
};

export default HomePage;