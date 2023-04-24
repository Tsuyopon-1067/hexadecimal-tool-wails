import { useState } from "react";
import logo from "./assets/images/logo-universal.png";
import style from "./App.module.css";
import { Greet } from "../wailsjs/go/main/App";
import NumList from "./NumList";
import NumButtonList from "./NumButtonList";

function App() {
    const [resultText, setResultText] = useState(
        "Please enter your name below 👇"
    );
    const [name, setName] = useState("");
    const updateName = (e: any) => setName(e.target.value);
    const updateResultText = (result: string) => setResultText(result);

    function greet() {
        Greet(name).then(updateResultText);
    }

    return (
        <div className={style.mainDiv}>
            <NumList />
            <NumButtonList />
        </div>
    );
}

export default App;
