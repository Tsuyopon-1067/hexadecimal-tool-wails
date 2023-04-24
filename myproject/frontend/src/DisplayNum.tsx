import style from "./DisplayNum.module.css";

type Props = {
    value: string;
};

export const DisplayNum: React.FC<Props> = ({ value }) => {
    return <p className={style.display}>{value}</p>;
};
