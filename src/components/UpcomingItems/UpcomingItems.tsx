import styles from "./UpcomingItems.module.css";
import { UpcomingItem } from "../UpcomingItem/UpcomingItem";
import { upcomingItemsProps } from "../../constants/propsConstants";

interface IUpcomingItems {
    items: upcomingItemsProps[];
}

export const UpcomingItems = ({ items }: IUpcomingItems) => {
    return (
        <div className={styles.items}>
            {items.map((item) => {
                return <UpcomingItem {...item} key={item.title} />;
            })}
        </div>
    );
};
