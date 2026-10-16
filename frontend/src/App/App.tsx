import React, { type FC } from "react";
import { Routes, Route } from "react-router-dom";

import "./styles/global.scss"
import "./styles/reset.scss"
import "./styles/variables.scss"

import LandingLayout from "./Layouts/LandingLayout";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import ContactsPage from "@/pages/ContactsPage";

import AuthLayout from "./Layouts/AuthLayout";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage/RegisterPage";

import ProfileLayout from "./Layouts/ProfileLayout/ProfileLayout";
import ProfilePage from "@/pages/ProfilePage/ProfilePage";
import ProfileSettingsPage from "@/pages/ProfileSettingsPage";

const App: FC = (): React.JSX.Element => {
    return (
        // Роуты на SPA
        <Routes>
            {/* Корневой роут, который содержить layout */}
            <Route path="/" element={ <LandingLayout />}>

                {/* Индексная страница, доступная по / */}
                <Route index element={ <HomePage /> } />
                <Route path="/about" element={ <AboutPage /> } />
                <Route path="/services" element={ <ServicesPage /> } />
                <Route path="/contacts" element={ <ContactsPage /> } />
            </Route>
            
            <Route element={ <AuthLayout /> }>
                <Route path="/login" element={ <LoginPage /> } />
                <Route path="/register" element={ <RegisterPage /> } />
            </Route>

            <Route path="/profile" element={ <ProfileLayout /> }>
                <Route index element={ <ProfilePage /> } />
                <Route path="/profile/settings" element={ <ProfileSettingsPage /> } />
            </Route>
        </Routes>
    );
};

export default App;