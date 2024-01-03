import { useState, useEffect } from "react";
import ButtonList from "./compoents/buttonList";
import NumberDisplayList from "./compoents/numberDisplayList";
import ValueDescribe from "./compoents/valueDescribe";
import styles from "./App.module.css";
import {
    Push,
    GetValueData,
    Delete,
    Pop,
    GetDescribeData,
} from "../wailsjs/go/main/Complement";
import { main } from "../wailsjs/go/models";
import { defaultValueData } from "./types";

function App() {
    const [values, setValues] = useState<main.ValueData>();
    const [describeData, setDescribeData] = useState<main.DescribeData[]>();

    const numberButtonClick = (key: number) => {
        Push(key).then(renewValues);
    };
    const deleteAllButtonClick = () => {
        Delete().then(renewValues);
    };
    const deleteButtonClick = () => {
        Pop().then(renewValues);
    };
    const renewValues = () => {
        GetValueData().then(setValues);
        GetDescribeData().then(setDescribeData);
    };
    useEffect(() => {
        renewValues();
    }, []);

    return (
        <div className={styles.mainDiv}>
            <div className={styles.display}>
                <ValueDescribe data={describeData} />
                <div className={styles.space} />
                <NumberDisplayList
                    title="数値"
                    data={values?.Value || defaultValueData.Value}
                />
                <div className={styles.space} />
                <NumberDisplayList
                    title="補数"
                    data={values?.ComplementValue || defaultValueData.Value}
                />
            </div>
            <div className={styles.buttonList}>
                <ButtonList
                    onClick={numberButtonClick}
                    deleteButtonClick={deleteButtonClick}
                    deleteAllButtonClick={deleteAllButtonClick}
                />
            </div>
        </div>
    );
}

export default App;
