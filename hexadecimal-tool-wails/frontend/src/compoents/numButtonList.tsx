import { useState } from "react";
import styles from "./numButtonList.module.css";
import NumButton from "./numButton";

function NumButtonList() {
    const list = [];
    for (let i = 0; i < 16; i++) {
        list.push(<NumButton key={i} number={i} />);
    }
    return <div className={styles.btnList}>{list}</div>;
}

export default NumButtonList;
