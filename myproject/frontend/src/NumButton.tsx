import style from "./NumButton.module.css";

type Props = {
    num: number;
    text: string;
};

export const NumButton: React.FC<Props> = ({ num, text }) => {
    return (
        <button className={style.numButton} type="button">
            {text}
        </button>
    );
};
