import React, { type Dispatch, type FC, type SetStateAction } from "react";

import Select from "@/shared/components/Select";

import styles from "./ServicesTable.module.scss";

import type { Service, sortVariants } from "@/shared/types/Service";

type ServiceTableProps = {
    services: Service[],
    sort: sortVariants,
    setSort: Dispatch<SetStateAction<sortVariants>>
}

const ServicesTable: FC<ServiceTableProps> = (props: ServiceTableProps): React.JSX.Element => {

    const {
        services,
        sort,
        setSort
    } = props;

    let sortedServices: Service[];

    switch (sort) {
        case "default": {
            sortedServices = services;
            break;
        }

        case "expensive": {
            sortedServices = services.sort((a, b) => b.price - a.price);
            break;
        }

        case "cheap": {
            sortedServices = services.sort((a, b) => a.price - b.price);
            break;
        }
        
        case "alphabet": {
            sortedServices = services.sort((a, b) => a.description.localeCompare(b.description));
            break;
        }
    }

    return (
        <section className={styles.servicesTable}>
            <div className={`${styles.servicesTable__inner} container`}>

                <Select 
                    setOption={setSort}
                    option={sort}
                />

                <div className={styles["table-scroll"]}>
                    <table className={styles["table-content"]}>
                        <thead>
                            <tr className={styles["row-head"]}>
                                <th className={styles["col-id"]}>Номер</th>
                                <th className={styles["col-desc"]}>Описание</th>
                                <th className={styles["col-price"]}>Цена</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                sortedServices.map(serv => (
                                    <tr key={serv.id}>
                                        <td className={styles["col-id"]}>{serv.id}</td>
                                        <td className={styles["col-desc"]}>{serv.description}</td>
                                        <td className={styles["col-price"]}>{serv.price} р.</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        </section>
    );
};

export default ServicesTable;