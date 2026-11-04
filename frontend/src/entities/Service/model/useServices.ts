import { useCallback, useEffect, useState } from "react"
import type { Service } from "./types"
import API from "@/shared/api/api";

type StatusType =
    | "loading"
    | "success"
    | "error"


export const useServices = () => {
    const [servicesAPI, setServices] = useState<Service[]>([]);
    const [status, setStatus] = useState<StatusType>("loading");

    const checkServices = useCallback(() => {
        
        setStatus("loading");

        API.getServices()
            .then((result) => {
                const services = result.services;

                setServices(services);
                setStatus("success")
                
            })
            .catch((error: unknown) => {
                setServices([]);
                setStatus("error");

                console.error(error);
            })
    }, [])

    useEffect(() => {
        checkServices()
    }, [checkServices]);

    return {
        servicesAPI,
        status
    }
}