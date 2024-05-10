import styles from "./InoLaunchpadSection.module.css";
import { FledAnimation } from "../FledAnimation/FledAnimation";
import arrowIcon from "@/assets/images/icons/featured-arrow.svg";
import { useState, useEffect } from "react";

import LeftArrow from "../../assets/images/icons/left-gray-arrow.svg";
import RightArrow from "../../assets/images/icons/right-gray-arrow.svg";

import { inosItem, upcomingItems } from "../../constants/LounchpadConstants";
import INOSItem from "../INOSItem/INOSItem";
import { UpcomingItems } from "../UpcomingItems/UpcomingItems";

const InoLaunchpadSection = () => {
    const [isFinished, setFinished] = useState(false);
    const [itemIndex, setItemIndex] = useState(0);
    const [page, setPage] = useState(INOSItem.length);
    useEffect(() => {
        setPage(itemIndex === 0 ? 1 : itemIndex - 1);
    }, [itemIndex]);

    const handleNext = () => {
        setItemIndex((prev) => {
            if (prev === 0) {
                return inosItem.length - 3;
            }
            return (prev -= 3);
        });
    };

    const handlePrev = () => {
        setItemIndex((prev) => {
            if (prev === inosItem.length - 3) {
                return 0;
            }
            return (prev += 3);
        });
    };

    return (
        <section className="my-container">
            <div className={styles.top}>
                <div className={styles.left}>
                    <h2 className={styles.title}>
                        <img
                            className={styles.titleLeft}
                            src={arrowIcon}
                            alt=""
                        />
                        <FledAnimation>INOs</FledAnimation>
                        <img
                            className={styles.titleRight}
                            src={arrowIcon}
                            alt=""
                        />
                    </h2>
                    <div className={styles.box}>
                        <button
                            style={{
                                color: !isFinished ? "white" : "",
                            }}
                            onClick={() => setFinished(false)}
                            className={`${styles.upcoming} shuffle-hover-inside`}
                        >
                            Live & Upcoming
                        </button>
                        <button
                            style={{
                                color: isFinished ? "white" : "",
                            }}
                            onClick={() => setFinished(true)}
                            className={`${styles.finished} shuffle-hover-inside`}
                        >
                            <p className="shuffle-hover-inside">Finished</p>
                        </button>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.pageWrapper}>
                        <button
                            className={styles.rightButton}
                            onClick={handleNext}
                        >
                            <img src={LeftArrow} alt="" />
                        </button>
                        <div className={styles.page}>{page}/4</div>
                        <button
                            className={styles.rightButton}
                            onClick={handlePrev}
                        >
                            <img src={RightArrow} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.topLine}>
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
                <div className={styles.line3}></div>
                <div className={styles.line4}></div>
                <div className={styles.line5}></div>
            </div>
            <div className={styles.items}>
                {isFinished ? (
                    <>
                        {inosItem
                            .slice(itemIndex, itemIndex + 3)
                            .map((item) => {
                                return <INOSItem {...item} key={item.title} />;
                            })}
                    </>
                ) : (
                    <UpcomingItems items={upcomingItems} />
                )}
            </div>
        </section>
    );
};

export default InoLaunchpadSection;
