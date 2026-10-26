import React, { type Dispatch, type SetStateAction } from "react";
import { createPortal } from "react-dom";

import styles from "./AddServiceForm.module.scss";

type AddServiceFormProps = {
    setIsAddServiceOpen: Dispatch<SetStateAction<boolean>>
}

const AddServiceForm = ({ setIsAddServiceOpen }: AddServiceFormProps): React.JSX.Element => {

    return createPortal(
        <div className={styles.overlay}
            onClick={() => setIsAddServiceOpen(false)}
        >
            <form onClick={(event) => event.stopPropagation()} className={styles.modal} action="">
                <input type="text" />
                <input type="text" />
            </form>
        </div>,
        document.body
    );
};

export default AddServiceForm;