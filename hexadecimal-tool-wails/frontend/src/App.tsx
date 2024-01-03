import { useState } from "react";
import logo from "./assets/images/logo-universal.png";
import "./App.css";
import { Greet } from "../wailsjs/go/main/App";
import ButtonList from "./compoents/buttonList";
import NumberDisplayList from "./compoents/numberDisplayList";
import styles from "./App.module.css";
import { Push, GetValueData, Delete, Pop } from "../wailsjs/go/main/Complement";
import { main } from "../wailsjs/go/models";
import { defaultValueData } from "./types";

function App() {
    const [resultText, setResultText] = useState(
        "Please enter your name below 👇"
    );
    const [name, setName] = useState("");
    const updateName = (e: any) => setName(e.target.value);
    const updateResultText = (result: string) => setResultText(result);
    const [values, setValues] = useState<main.ValueData>();

    function greet() {
        Greet(name).then(updateResultText);
    }
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
        <div id="App">
            <div className={styles.mainDiv}>
                <div className={styles.display}>
                    <NumberDisplayList
                        title="数値"
                        data={values?.Value || defaultValueData.Value}
                    />
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
            <div id="result" className="result">
                {resultText}
            </div>
            <div id="input" className="input-box">
                <input
                    id="name"
                    className="input"
                    onChange={updateName}
                    autoComplete="off"
                    name="input"
                    type="text"
                />
                <button className="btn" onClick={greet}>
                    Greet
                </button>
            </div>
        </div>
    );
}

export default App;
