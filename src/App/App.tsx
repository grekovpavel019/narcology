import React, { type FC } from "react";
import { Routes, Route } from "react-router-dom";

import "./styles/global.scss"
import "./styles/reset.scss"
import "./styles/variables.scss"

import Layout from "@/widgets/Layout";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import ContactsPage from "@/pages/ContactsPage";

import LoginPage from "@/pages/LoginPage";
import ProfileLayout from "@/widgets/ProfileLayout/ProfileLayout";
import ProfilePage from "@/pages/ProfilePage/ProfilePage";
import ProfileSettingsPage from "@/pages/ProfileSettingsPage";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout";

const App: FC = (): React.JSX.Element => {
    return (
        // Роуты на SPA
        <Routes>
            {/* Корневой роут, который содержить layout */}
            <Route path="/" element={ <Layout />}>

                {/* Индексная страница, доступная по / */}
                <Route index element={ <HomePage /> } />
                <Route path="/about" element={ <AboutPage /> } />
                <Route path="/services" element={ <ServicesPage /> } />
                <Route path="/contacts" element={ <ContactsPage /> } />
            </Route>
            
            <Route element={ <AuthLayout /> }>
                <Route path="/login" element={ <LoginPage /> } />
            </Route>

            <Route path="/profile" element={ <ProfileLayout /> }>
                <Route index element={ <ProfilePage /> } />
                <Route path="/profile/settings" element={ <ProfileSettingsPage /> } />
            </Route>
        </Routes>
    );
};

export default App;