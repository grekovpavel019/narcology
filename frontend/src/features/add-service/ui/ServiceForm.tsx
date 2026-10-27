import React, { useState } from "react";
import { createPortal } from "react-dom";
import { SERVICE_AUDIENCES, SERVICE_CATEGORIES, SERVICE_FORMATS, type Service } from "@/entities/Service";

import styles from "./ServiceForm.module.scss";
import TextField from "@/shared/components/TextField";
import Select from "@/shared/components/Select";
import Button from "@/shared/components/Button";
import Title from "@/shared/components/typography/Title";

import type { ServiceAudience, ServiceCategory, ServiceFormat } from "@/entities/Service";

type ServiceFormValues = Omit<Service, "id">

type ServiceFormProps = {
    service?: Service;
    onClose: () => void;
    onSubmit: (service: ServiceFormValues) => void;
};
const ServiceForm = (props: ServiceFormProps): React.JSX.Element => {

    const { 
        service,
        onClose,
        onSubmit
    } = props;

    const [name, setName] = useState(
        service ? service.description : ""
    );
    
    const [sub, setSub] = useState(
        service ? service.sub : ""
    )

    const [price, setPrice] = useState(
        service ? service.price : ""
    )

    const [category, setCategory] = useState<ServiceCategory>(
        service ? service.category : SERVICE_CATEGORIES[0]
    );
    const categoryOptions = SERVICE_CATEGORIES.map(cat => ({
        value: cat,
        label: cat
    }));

    const [audience, setAudience] = useState<ServiceAudience>(
        service ? service.audience : SERVICE_AUDIENCES[0]
    );
    const audienceOptions = SERVICE_AUDIENCES.map(aud => ({
        value: aud,
        label: aud
    }));

    const [format, setFormat] = useState<ServiceFormat>(
        service ? service.format : SERVICE_FORMATS[0]
    );
    const formatOptions = SERVICE_FORMATS.map(form => ({
        value: form,
        label: form
    }));

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const values: ServiceFormValues = {
            description: name,
            sub,
            price: Number(price),
            category,
            audience,
            format
        }

        onSubmit(values);
        onClose();
    }

    return createPortal(
        <div className={styles.overlay}
            onClick={onClose}
        >
            <form 
                onClick={(event) => event.stopPropagation()} 
                className={styles.modal} action=""
                onSubmit={handleSubmit}
            >

                <Title variant="h2">{service ? "Редактировать" : "Добавить"}</Title>

                <TextField
                    label="Название услуги" 
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                />

                <TextField 
                    label="Описание услуги" 
                    value={sub}
                    onChange={(event) => setSub(event.target.value)}
                />

                <div className={styles.selects}>
                    <Select 
                        options={categoryOptions}
                        value={category}
                        onChange={setCategory}
                    />

                    <Select 
                        options={formatOptions}
                        value={format}
                        onChange={setFormat}
                    />

                    <Select 
                        options={audienceOptions}
                        value={audience}
                        onChange={setAudience}
                    />
                </div>

                <TextField 
                    value={price}
                    onChange={(event) => setPrice(event.target.value)} 
                    label="Цена" 
                />

                <Button type="submit" variant="primaryButton">Сохранить</Button>
            </form>
        </div>,
        document.body
    );
};

export default ServiceForm;