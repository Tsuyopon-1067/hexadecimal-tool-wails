import { useState } from "react";
import styles from "./numButtonList.module.css";
import NumButton from "./numButton";

interface props {
    onClick: (key: number) => void;
}

function NumButtonList({ onClick }: props) {
    const listLeft = [];
    const listRight = [];
    for (let i = 0; i < 10; i++) {
        listLeft.push(<NumButton key={i} number={i} onClick={onClick} />);
    }
    for (let i = 10; i < 16; i++) {
        listRight.push(<NumButton key={i} number={i} onClick={onClick} />);
    }
    return (
        <div className={styles.btnList}>
            <div className={styles.left}>{listLeft}</div>
            <div className={styles.right}>{listRight}</div>
        </div>
    );
}

export default NumButtonList;
