import { useCallback, useEffect, useState } from "react"
import type { CreateServiceInput, Service, UpdateServiceInput } from "./types"
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

    const updateService = useCallback((id: number, data: UpdateServiceInput) => {
        API.updateService(id, data).then((response) => {
            setServices(prev => prev.map(serv => serv.id === response.service.id ? response.service : serv))
        })
    }, [])

    useEffect(() => {
        checkServices()
    }, [checkServices]);

    return {
        services,
        status,

        addService,
        updateService
    }
}