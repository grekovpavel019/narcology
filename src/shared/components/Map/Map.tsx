import React, { type FC } from "react";

import { CLINIC_ADDRESS } from "@/shared/constants/contacts";

import styles from "./Map.module.scss";

const Map: FC = (): React.JSX.Element => {
    return (
        <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(CLINIC_ADDRESS)}&output=embed`}
            style={{ border: 0 }}
            className={styles.map}
            allowFullScreen
            // loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
        />
    );
};

export default Map;