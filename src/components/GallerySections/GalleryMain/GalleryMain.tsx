import styles from "./GalleryMain.module.css";
import { inosItem } from "@/constants/LounchpadConstants";
import GalleryItem from "./GalleryItem/GalleryItem";

interface IGalleryMain {
  isActive: string;
}

const GalleryMain = ({ isActive }: IGalleryMain) => {
  return (
    <>
      <div className={styles.container}>
        <div className="my-container">
          <div className={styles.items}>
            {isActive && (
              <>
                {inosItem.map((item, index) => {
                  return (
                    <>
                      <GalleryItem {...item} key={item.title} />
                      {index > 0 &&
                        index !== inosItem.length - 1 &&
                        (index + 1) % 4 === 0 && (
                          <div
                            className={styles.lines}
                            style={{
                              top: `${((index + 1) / 4) * 385 + ((index - 3) * 58) / 4}px`,
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
      <div className={styles.buttonWrapper}>
        <button className={styles.button}>View more</button>
      </div>
    </>
  );
};

export default GalleryMain;
