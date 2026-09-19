import React, { type FC } from "react";

import styles from "./Map.module.scss";

const Map: FC = (): React.JSX.Element => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1002.4254442383026!2d34.30462213315965!3d53.30416987755246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4132a822d31f351b%3A0xea15b3dc41fe8bfa!2z0JHQk9Ci0KM!5e0!3m2!1sru!2sru!4v1789840522297!5m2!1sru!2sru"
            style={{ border: 0 }}
            className={styles.map}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
        />
    );
};

export default Map;