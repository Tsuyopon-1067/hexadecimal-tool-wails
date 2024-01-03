import { useState } from "react";
import ButtonList from "./compoents/buttonList";
import NumberDisplayList from "./compoents/numberDisplayList";
import styles from "./App.module.css";
import { Push, GetValueData, Delete, Pop } from "../wailsjs/go/main/Complement";
import { main } from "../wailsjs/go/models";
import { defaultValueData } from "./types";

function App() {
    const [values, setValues] = useState<main.ValueData>();

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
        GetValueData().then(updateValues);
    };
    const updateValues = (result: main.ValueData) => setValues(result);

    return (
        <div className={styles.mainDiv}>
            <div className={styles.display}>
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
