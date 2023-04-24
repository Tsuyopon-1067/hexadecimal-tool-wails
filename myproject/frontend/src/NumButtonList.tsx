import { NumButton } from "./NumButton";
import style from "./NumButtonList.module.css";

function NumButtonList() {
    return (
        <div className={style.numButtonList}>
            <NumButton num={0} text="0x0000" />
            <NumButton num={1} text="0x0001" />
            <NumButton num={2} text="0x0010" />
            <NumButton num={3} text="0x0011" />
            <NumButton num={4} text="0x0100" />
            <NumButton num={5} text="0x0101" />
            <NumButton num={6} text="0x0110" />
            <NumButton num={7} text="0x0111" />
            <NumButton num={8} text="1x0000" />
            <NumButton num={9} text="1x0001" />
            <NumButton num={10} text="1x0010" />
            <NumButton num={11} text="1x0011" />
            <NumButton num={12} text="1x0100" />
            <NumButton num={13} text="1x0101" />
            <NumButton num={14} text="1x0110" />
            <NumButton num={15} text="1x0111" />
        </div>
    );
}

export default NumButtonList;
