import React, { useState, type Dispatch, type SetStateAction } from "react";
import { createPortal } from "react-dom";
import { SERVICE_AUDIENCES, SERVICE_CATEGORIES, SERVICE_FORMATS, type Service } from "@/entities/Service";

import styles from "./AddServiceForm.module.scss";
import type { ServiceModalState } from "@/shared/types/modal";
import TextField from "@/shared/components/TextField";
import Select from "@/shared/components/Select";
import Button from "@/shared/components/Button";
import Title from "@/shared/components/typography/Title";

import type { ServiceAudience, ServiceCategory, ServiceFormat } from "@/entities/Service";

type AddServiceFormProps = {
    setModal: Dispatch<SetStateAction<ServiceModalState<Service>>>
}

const AddServiceForm = ({ setModal }: AddServiceFormProps): React.JSX.Element => {

    const [category, setCategory] = useState<ServiceCategory>(
        SERVICE_CATEGORIES[0]
    );
    const categoryOptions = SERVICE_CATEGORIES.map(cat => ({
        value: cat,
        label: cat
    }));

    const [audience, setAudience] = useState<ServiceAudience>(
        SERVICE_AUDIENCES[0]
    );
    const audienceOptions = SERVICE_AUDIENCES.map(aud => ({
        value: aud,
        label: aud
    }));

    const [format, setFormat] = useState<ServiceFormat>(
        SERVICE_FORMATS[0]
    );
    const formatOptions = SERVICE_FORMATS.map(form => ({
        value: form,
        label: form
    }));

    return createPortal(
        <div className={styles.overlay}
            onClick={() => setModal(null)}
        >
            <form onClick={(event) => event.stopPropagation()} className={styles.modal} action="">

                <Title variant="h2">Добавить услугу</Title>

                <TextField label="Название услуги" />

                <TextField label="Описание услуги" />

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

                <TextField label="Цена" />

                <Button variant="primaryButton">Сохранить</Button>
            </form>
        </div>,
        document.body
    );
};

export default AddServiceForm;