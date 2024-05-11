import styles from "./GalleryTop.module.css";

const buttons = ["ALL", "ILLUSTRATIONS", "PHOTOGRAPHY", "MOTION"];

interface IGalleryTop {
    isActive: string;
    setActive: (arg0: string) => void;
}

const GalleryTop = ({isActive, setActive}: IGalleryTop) => {

    return (
        <div className={styles.container}>
            <div className={styles.line} />
            <div className={styles.wrapper}>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.title}>
                        DUNE <span>Gallery</span>
                    </h2>
                </div>

                <div className={styles.buttonsWrapper}>
                    {buttons.map((button) => (
                        <button
                            key={button}
                            className={`${styles.button} ${isActive === button ? styles.active : ""}`}
                            onClick={() => setActive(button)}
                        >
                            {button}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryTop;
