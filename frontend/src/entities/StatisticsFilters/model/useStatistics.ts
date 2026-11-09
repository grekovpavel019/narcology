import { useState } from "react";

export function useStatistics() {
    const [statistics, setStatistics] = useState([]);

    return {
        statistics,
        setStatistics
    }
}