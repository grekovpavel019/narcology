import React, { type FC } from "react";

import Title from "@/shared/components/typography/Title";
import Text from "@/shared/components/typography/Text";
import Breadcrumb from "@/shared/components/Breadcrumb";

import styles from "./Overview.module.scss";

type OverviewProps = {
    children: string;
    title: string;
    path: string
}

const Overview: FC<OverviewProps> = (props: OverviewProps): React.JSX.Element => {
    
    const {
        children,
        title,
        path
    } = props;

    return (
        <section className={styles.overview}>
            <div className={`${styles.overview__intro} container`}>
                
                <Breadcrumb>{path}</Breadcrumb>

                <Title
                    variant="h1"
                >
                    {title}
                </Title>
                
                <Text>
                    {children}
                </Text>
            </div>
        </section>
    );
};

export default Overview;