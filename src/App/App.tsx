import React, { type FC } from "react";
import { Routes, Route } from "react-router-dom";

import "./styles/global.scss"
import "./styles/reset.scss"
import "./styles/variables.scss"

import Layout from "@/sections/Layout";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import ContactsPage from "@/pages/ContactsPage";

const App: FC = (): React.JSX.Element => {
    return (
        // Роуты на SPA
        <Routes>
            {/* Корневой роут, который содержить layout */}
            <Route path="/" element={ <Layout />}>

                {/* Индексная страница */}
                <Route index element={ <HomePage /> } />
                <Route path="/about" element={ <AboutPage /> } />
                <Route path="/services" element={ <ServicesPage /> } />
                <Route path="/contacts" element={ <ContactsPage /> } />
            </Route>
        </Routes>
    );
};

export default App;