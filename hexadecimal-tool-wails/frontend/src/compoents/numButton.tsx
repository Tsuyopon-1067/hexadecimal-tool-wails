import { useState } from "react";
import styles from "./numButton.module.css";
import { Push } from "../../wailsjs/go/main/Complement";

interface NumButtonProps {
    number: number;
    key: number;
    onClick: (key: number) => void;
}

function NumButton({ number, key, onClick }: NumButtonProps) {
    const decimalString = number.toString();
    const hexString: string = number.toString(16);

    return (
        <button
            key={key}
            data-key={key}
            onClick={() => onClick(key)}
            className={styles.numButton}
        >
            {decimalString} : 0x000{hexString}
        </button>
    );
}

export default NumButton;
