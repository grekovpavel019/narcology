import { useUserContext } from "@/entities/User/model/useUserContext";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import API from "@/shared/api/api";

const PageViewTracker = (): null => {
    const location = useLocation();

    const { status } = useUserContext();

    useEffect(() => {
        if (status === "authenticated") {
            API.sendPageView(location.pathname);
            console.log(location.pathname);
            
        }

        console.log(status);
    }, [location.pathname, status])

    return null;
};

export default PageViewTracker;