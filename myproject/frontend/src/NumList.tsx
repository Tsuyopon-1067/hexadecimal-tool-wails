import { DisplayNum } from "./DisplayNum";
import style from "./NumList.module.css";

function NumList() {
    return (
        <div className={style.numList}>
            <DisplayNum value="0" />
            <DisplayNum value="0x" />
            <DisplayNum value="0b" />
            <DisplayNum value="0" />
            <DisplayNum value="0x" />
            <DisplayNum value="0b" />
        </div>
    );
}

export default NumList;
