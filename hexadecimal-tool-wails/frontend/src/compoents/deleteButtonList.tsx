import { useState } from "react";
import styles from "./deleteButton.module.css";

interface DeleteButtonListProps {
    deleteButtonClick: () => void;
    deleteAllButtonClick: () => void;
}
function DeleteButtonList({
    deleteButtonClick,
    deleteAllButtonClick,
}: DeleteButtonListProps) {
    return (
        <div className={styles.mainDiv}>
            <button
                type="button"
                className={styles.deleteButton}
                onClick={deleteButtonClick}
            >
                ←
            </button>
            <button
                type="button"
                className={styles.deleteButton}
                onClick={deleteAllButtonClick}
            >
                x
            </button>
        </div>
    );
}

export default DeleteButtonList;
