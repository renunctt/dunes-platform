import styles from "./GalleryMain.module.css";
import { inosItem } from "@/constants/LounchpadConstants";
import GalleryItem from "./GalleryItem/GalleryItem";
import { useEffect, useState } from "react";

interface IGalleryMain {
  isActive: string;
}

const GalleryMain = ({ isActive }: IGalleryMain) => {
  const [end, setEnd] = useState(8);
  const [array, setArray] = useState(inosItem.slice(0, 8));

  useEffect(() => {
    if (inosItem.length >= end) {
      setArray(inosItem.slice(0, end));
    }
  }, [end]);

  return (
    <>
      <div className={styles.container}>
        <div className="my-container">
          <div className={styles.items}>
            {isActive && (
              <>
                {array.map((item, index) => {
                  return (
                    <>
                      <GalleryItem {...item} key={item.title} />
                      {index > 0 &&
                        index + 1 !== end &&
                        (index + 1) % 4 === 0 && (
                          <div
                            className={styles.lines}
                            style={{
                              top: `${((index + 1) / 4) * 390 + ((index - 3) * 58) / 4}px`,
                            }}
                          >
                            <div className={styles.line} />
                          </div>
                        )}
                    </>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
      <div
        className={styles.buttonWrapper}
        onClick={() => setEnd((prev) => prev + 4)}
      >
        <button className={styles.button} disabled={inosItem.length === end}>
          View more
        </button>
      </div>
    </>
  );
};

export default GalleryMain;
