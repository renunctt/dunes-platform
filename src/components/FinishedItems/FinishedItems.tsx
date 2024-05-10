import styles from "./FinishedItems.module.css";
import { FinishedItem } from "../FinishedItem/FinishedItem";
import { ItemProps } from "../../constants/propsConstants";

interface IFinishedItems {
  items: ItemProps[];
}

export const FinishedItems = ({items}: IFinishedItems) => {
    return (
        <div className={styles.items}>
            {items.map((item) => {
                return <FinishedItem {...item} key={item.title} />;
            })}
        </div>
    );
};
