import { useState } from "react";
import styles from "./numButton.module.css";
import { Push } from "../../wailsjs/go/main/Complement";

interface NumButtonProps {
    number: number;
    onClick: (key: number) => void;
}

function NumButton({ number, onClick }: NumButtonProps) {
    const binString = number.toString(2).padStart(4, "0");
    const hexString: string = number.toString(16).toUpperCase();
    const buttonNumber = number;
    return (
        <button
            onClick={() => onClick(buttonNumber)}
            className={styles.numButton}
        >
            {hexString} : 0b{binString}
        </button>
    );
}

export default NumButton;
