import { useState } from "react";
import styles from "./numberDisplayList.module.css";
import NumberDisplayListLine from "./numberDisplayListLine";
import { HexDecBin } from "../types";

interface NumberDisplayListProps {
    data: HexDecBin;
    title: string;
}
function NumberDisplayList({ title, data }: NumberDisplayListProps) {
    const descriptions = ["16進数", "10進数", "2進数"];
    const values = [data.hex, data.dec, data.bin];
    const numberDisplayListLines = [];
    for (let i = 0; i < 3; i++) {
        numberDisplayListLines.push(
            <NumberDisplayListLine
                description={descriptions[i]}
                value={values[i]}
            />
        );
    }
    return (
        <div className={styles.tableDiv}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.title} colSpan={2}>
                            {title}
                        </th>
                    </tr>
                    <tr>
                        <th className={styles.subTitleType}>種別</th>
                        <th className={styles.subTitleResult}>結果</th>
                    </tr>
                </thead>
                <tbody>{numberDisplayListLines}</tbody>
            </table>
        </div>
    );
}

export default NumberDisplayList;
