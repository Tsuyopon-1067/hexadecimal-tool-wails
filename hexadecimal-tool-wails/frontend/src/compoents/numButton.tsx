import { useState } from "react";
import styles from "./numButton.module.css";

interface NumButtonProps {
    number: number;
    key: number;
}
function NumButton({ number, key }: NumButtonProps) {
    const decimalString = number.toString();
    const hexString: string = number.toString(16);

    return (
        <button key={key} className={styles.numButton}>
            {decimalString} : 0x000{hexString}
        </button>
    );
}

export default NumButton;
