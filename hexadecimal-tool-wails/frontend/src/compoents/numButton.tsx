import { useState } from "react";
import styles from "./numButton.module.css";
import { Push } from "../../wailsjs/go/main/Complement";

interface NumButtonProps {
    number: number;
    onClick: (key: number) => void;
}

function NumButton({ number, onClick }: NumButtonProps) {
    const decimalString = number.toString();
    const hexString: string = number.toString(16);
    const buttonNumber = number;
    return (
        <button
            onClick={() => onClick(buttonNumber)}
            className={styles.numButton}
        >
            {decimalString} : 0x000{hexString}
        </button>
    );
}

export default NumButton;
