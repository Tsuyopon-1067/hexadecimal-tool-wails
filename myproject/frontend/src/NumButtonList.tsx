import { NumButton } from "./NumButton";
import style from "./NumButtonList.module.css";

function NumButtonList() {
    return (
        <div className={style.numButtonList}>
            <NumButton num={0} text="0x0: 0b 0000" />
            <NumButton num={1} text="0x1: 0b 0001" />
            <NumButton num={2} text="0x2: 0b 0010" />
            <NumButton num={3} text="0x3: 0b 0011" />
            <NumButton num={4} text="0x4: 0b 0100" />
            <NumButton num={5} text="0x5: 0b 0101" />
            <NumButton num={6} text="0x6: 0b 0110" />
            <NumButton num={7} text="0x7: 0b 0111" />
            <NumButton num={8} text="0x8: 0b 1000" />
            <NumButton num={9} text="0x9: 0b 1001" />
            <NumButton num={10} text="0xA: 0b 1010" />
            <NumButton num={11} text="0xB: 0b 1011" />
            <NumButton num={12} text="0xC: 0b 1100" />
            <NumButton num={13} text="0xD: 0b 1101" />
            <NumButton num={14} text="0xE: 0b 1110" />
            <NumButton num={15} text="0xF: 0b 1111" />
        </div>
    );
}

export default NumButtonList;
