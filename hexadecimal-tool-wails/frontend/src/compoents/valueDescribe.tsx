import styles from "./numberDisplayList.module.css";
import { main } from "../../wailsjs/go/models";
import ValueDescribeLine from "./valueDescribeLine";

function ValueDescribe({ data }: { data: main.DescribeData[] | undefined }) {
    const lines = [];
    if (data) {
        for (const v of data) {
            lines.push(<ValueDescribeLine data={v} />);
        }
    }
    return (
        <div className={styles.tableDiv}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.title} colSpan={2}>
                            桁数・範囲
                        </th>
                    </tr>
                    <tr>
                        <th className={styles.subTitleType}>種別</th>
                        <th className={styles.subTitleResult}>結果</th>
                    </tr>
                </thead>
                <tbody>{lines}</tbody>
            </table>
        </div>
    );
}

export default ValueDescribe;
