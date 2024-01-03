import { useState } from "react";
import styles from "./buttonList.module.css";
import NumButtonList from "./numButtonList";
import DeleteButtonList from "./deleteButtonList";

interface ButtonListProps {
    onClick: (key: number) => void;
    deleteButtonClick: () => void;
    deleteAllButtonClick: () => void;
}

function ButtonList({
    onClick,
    deleteButtonClick,
    deleteAllButtonClick,
}: ButtonListProps) {
    return (
        <div className={styles.mainDiv}>
            <DeleteButtonList
                deleteButtonClick={deleteButtonClick}
                deleteAllButtonClick={deleteAllButtonClick}
            />
            <NumButtonList onClick={onClick} />
        </div>
    );
}

export default ButtonList;
