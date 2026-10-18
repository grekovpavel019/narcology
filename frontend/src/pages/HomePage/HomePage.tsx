import React, { type FC } from "react";

import Hero from "@/widgets/Hero";
import Benefits from "@/widgets/Benefits";
import Services from "@/widgets/Services";
import { useUserContext } from "@/entities/User/model/useUserContext";

const HomePage: FC = (): React.JSX.Element => {
    const { user, status} = useUserContext();

    return (
        <>
        <div>
            статус {status}
        </div>
            <Hero />
            <Benefits />
            <Services />
        </>
    );
};

export default HomePage;