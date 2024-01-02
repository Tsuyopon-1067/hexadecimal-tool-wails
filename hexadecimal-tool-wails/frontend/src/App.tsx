import { useState } from "react";
import logo from "./assets/images/logo-universal.png";
import "./App.css";
import { Greet } from "../wailsjs/go/main/App";
import NumButtonList from "./compoents/numButtonList";
import NumberDisplayList from "./compoents/numberDisplayList";
import styles from "./App.module.css";
import { Push, GetValueData } from "../wailsjs/go/main/Complement";
import { ValueData, defaultValueData } from "./types";

function App() {
    const [resultText, setResultText] = useState(
        "Please enter your name below 👇"
    );
    const [name, setName] = useState("");
    const updateName = (e: any) => setName(e.target.value);
    const updateResultText = (result: string) => setResultText(result);
    const [values, setValues] = useState<ValueData>();

    function greet() {
        Greet(name).then(updateResultText);
    }
    const numberButtonClick = (key: number) => {
        Push(key).then();
    };
    const renewValues = () => {
        GetValueData().then((data) => setValues(data));
    };

    return (
        <div id="App">
            <div className={styles.mainDiv}>
                <div className={styles.display}>
                    <NumberDisplayList
                        title="数値"
                        data={values?.value || defaultValueData.value}
                    />
                    <NumberDisplayList
                        title="補数"
                        data={values?.value || defaultValueData.value}
                    />
                </div>
                <div className={styles.buttonList}>
                    <NumButtonList onClick={numberButtonClick} />
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
