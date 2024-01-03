import { useState } from "react";
import styles from "./numberDisplayListLine.module.css";
import { main } from "../../wailsjs/go/models";

function ValueDescribeLine({ data }: { data: main.DescribeData | undefined }) {
    let title = "undefined";
    let value = "undefined";
    if (data) {
        title = data.Title || "";
        value = data.Value || "";
    }
    return (
        <tr>
            <td className={styles.tdLeft}>{title}</td>
            <td className={styles.tdRight}>{value}</td>
        </tr>
    );
}

export default ValueDescribeLine;
