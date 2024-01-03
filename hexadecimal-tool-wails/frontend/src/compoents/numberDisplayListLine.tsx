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
            <td className={styles.tdLeft}>{description}</td>
            <td className={styles.tdRight}>{value}</td>
        </tr>
    );
}

export default NumberDisplayListLine;
