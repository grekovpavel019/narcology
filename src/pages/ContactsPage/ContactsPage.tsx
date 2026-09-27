import React, { type FC } from "react";

import Overview from "@/sections/Overview";
import Contacts from "@/sections/Contacts";

const ContactsPage: FC = (): React.JSX.Element => {
    return (
        <>
            <Overview
                title="Контакты"
                path="Контакты"
            >
                Свяжитесь с нами удобным способом — по телефону, email или через форму ниже.
            </Overview>

            <Contacts />
        </>
    );
};

export default ContactsPage;