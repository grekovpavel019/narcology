import React, { type FC } from "react";

import styles from "./Contacts.module.scss";

import Title from "@/shared/components/typography/Title";
import Text from "@/shared/components/typography/Text";
import ShieldIcon from "@/shared/icons/ShieldIcon";
import LockIcon from "@/shared/icons/LockIcon";
import UserIcon from "@/shared/icons/UserIcon";
import MessageIcon from "@/shared/icons/MessageIcon";

import Map from "@/shared/components/Map";

import { CLINIC_ADDRESS } from "@/shared/constants/contacts";
import { CLINIC_EMAIL } from "@/shared/constants/contacts";
import { CLINIC_HOURS } from "@/shared/constants/contacts";
import { CLINIC_TELEPHONE } from "@/shared/constants/contacts";

const Contacts: FC = (): React.JSX.Element => {
    return (
        <section className={styles.contacts}>
            <div className={`${styles.contacts__inner} container`}>
                <Title variant="h2">
                    Информация
                </Title>

                <div className={styles.contacts__content}>

                    <div className={styles.contacts__elements}>
                        <div className={styles.contacts__element}>

                            <UserIcon />
                            <div className="label">
                                <Title variant="h4">Адрес</Title>
                                <Text>
                                    {CLINIC_ADDRESS}
                                </Text>
                            </div>
                            
                        </div>
                        <div className={styles.contacts__element}>

                            <MessageIcon />
                            <div className="label">
                                <Title variant="h4">Телефон</Title>
                                <Text>
                                    {CLINIC_TELEPHONE.label}
                                </Text>
                            </div>

                        </div>
                        <div className={styles.contacts__element}>

                            <LockIcon />
                            <div className="label">
                                <Title variant="h4">Email</Title>
                                <Text>
                                    {CLINIC_EMAIL}
                                </Text>
                            </div>

                        </div>
                        <div className={styles.contacts__element}>

                            <ShieldIcon />
                            <div className="label">
                                <Title variant="h4">Часы работы</Title>
                                <Text>
                                    {CLINIC_HOURS}
                                </Text>
                            </div>
                        </div>


                    </div>

                    <Map />

                </div>

            </div>
        </section>
    );
};

export default Contacts;