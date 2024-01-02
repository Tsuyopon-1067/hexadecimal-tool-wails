import { useState } from "react";
import styles from "./numberDisplayListLine.module.css";

interface NumberDisplayListLineProps {
    description: string;
    value: string;
}
function NumberDisplayListLine({
    description,
    value,
}: NumberDisplayListLineProps) {
    return (
        <tr>
            <td className={styles.td}>{description}</td>
            <td className={styles.td}>{value}</td>
        </tr>
    );
}

export default NumberDisplayListLine;
