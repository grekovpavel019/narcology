import React, { type FC } from "react";
import { Routes, Route } from "react-router-dom";

import "./styles/global.scss"
import "./styles/reset.scss"
import "./styles/variables.scss"

import Layout from "@/sections/Layout";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";

const App: FC = (): React.JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={ <Layout />}>
                <Route index element={ <HomePage /> } />
                <Route path="/about" element={ <AboutPage /> } />
                <Route path="/services" element={} />
            </Route>
        </Routes>
    );
};

export default App;