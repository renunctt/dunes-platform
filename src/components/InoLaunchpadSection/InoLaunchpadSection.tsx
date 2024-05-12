import styles from "./InoLaunchpadSection.module.css";
import { FledAnimation } from "../FledAnimation/FledAnimation";
import arrowIcon from "@/assets/images/icons/featured-arrow.svg";
import { useState, useEffect } from "react";

import LeftArrow from "../../assets/images/icons/left-gray-arrow.svg";
import RightArrow from "../../assets/images/icons/right-gray-arrow.svg";

import { inosItem, upcomingItems } from "../../constants/LounchpadConstants";
import INOSItem from "../INOSItem/INOSItem";
import { UpcomingItems } from "../UpcomingItems/UpcomingItems";
import ScrollText from '../ScrollText'

const InoLaunchpadSection = () => {
  const [isFinished, setFinished] = useState(false);
  const [page, setPage] = useState(INOSItem.length);
  const [endOfArr, setEndOfArr] = useState({ start: 0, end: 3 });
  const [arr, setArr] = useState(inosItem.slice(0, endOfArr.end));

  useEffect(() => {
    setArr(inosItem.slice(endOfArr.start, endOfArr.end));
    console.log(endOfArr);

    setPage(Math.ceil(endOfArr.end / 3));
  }, [endOfArr]);

  const handleNext = () => {
    if (endOfArr.end >= inosItem.length) {
      return setEndOfArr({ start: 0, end: 3 });
    }
    return setEndOfArr((prev) => ({
      start: prev.start + 3,
      end: prev.end + 3,
    }));
  };

  const handlePrev = () => {
    if (endOfArr.start - 3 < 0) {
      return setEndOfArr({
        start: inosItem.length - 3 + (inosItem.length % 3) + 1,
        end: inosItem.length + (inosItem.length % 3) + 1,
      });
    }
    return setEndOfArr((prev) => ({
      start: prev.start - 3,
      end: prev.end - 3,
    }));
  };

  return (
    <section className="my-container">
      <div className={styles.top}>
        <div className={styles.left}>
          <h2 className={styles.title}>
            <img className={styles.titleLeft} src={arrowIcon} alt="" />
            <FledAnimation><ScrollText text="INOs" /></FledAnimation>
            <img className={styles.titleRight} src={arrowIcon} alt="" />
          </h2>
          <div className={styles.box}>
            <button
              style={{
                color: isFinished ? "white" : "",
              }}
              onClick={() => setFinished(true)}
              className={`${styles.upcoming} shuffle-hover-inside`}
            >
              Live & Upcoming
            </button>
            <button
              style={{
                color: !isFinished ? "white" : "",
              }}
              onClick={() => setFinished(false)}
              className={`${styles.finished} shuffle-hover-inside`}
            >
              <p className="shuffle-hover-inside">Finished</p>
            </button>
          </div>
        </div>
        {!isFinished && (
          <div className={styles.right}>
            <div className={styles.pageWrapper}>
              <button className={styles.rightButton} onClick={handlePrev}>
                <img src={LeftArrow} alt="" />
              </button>
              <div className={styles.page}>{page}/{Math.ceil(inosItem.length / 3)}</div>
              <button className={styles.rightButton} onClick={handleNext}>
                <img src={RightArrow} alt="" />
              </button>
            </div>
          </div>
        )}
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
          <UpcomingItems items={upcomingItems} />
        ) : (
          <>
            {arr.map((item) => {
              return <INOSItem {...item} key={item.title} />;
            })}
          </>
        )}
      </div>
    </section>
  );
};

export default InoLaunchpadSection;
