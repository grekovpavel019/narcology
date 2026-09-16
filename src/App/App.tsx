import React, { type FC } from "react";

import "./styles/global.scss"
import "./styles/reset.scss"
import "./styles/variables.scss"
import HomePage from "@/pages/HomePage";

const App: FC = (): React.JSX.Element => {
    return (
        <HomePage />
    );
};

export default App;