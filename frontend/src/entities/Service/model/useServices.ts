import { useCallback, useEffect, useState } from "react"
import type { CreateServiceInput, Service } from "./types"
import API from "@/shared/api/api";

type StatusType =
    | "loading"
    | "success"
    | "error"


export const useServices = () => {
    const [services, setServices] = useState<Service[]>([]);
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

    const addService = useCallback((data: CreateServiceInput) => (
        API.addService(data).then((response) => {
            setServices(prev => [...prev, response.service])
        })
    ), []);

    useEffect(() => {
        checkServices()
    }, [checkServices]);

    return {
        services,
        status,

        addService
    }
}