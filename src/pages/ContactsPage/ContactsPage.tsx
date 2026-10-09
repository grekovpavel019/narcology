import React, { type FC } from "react";

import Overview from "@/widgets/Overview";
import Contacts from "@/widgets/Contacts";

const ContactsPage: FC = (): React.JSX.Element => {
    return (
        <>
            <Overview
                title="Контакты"
                path="Контакты"
            >
                Свяжитесь с нами удобным способом — по телефону, email или приедьте к нам в офис.
            </Overview>

            <Contacts />
        </>
    );
};

export default ContactsPage;