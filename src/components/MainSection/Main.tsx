import styles from "./Main.module.css";
import bgVideo from "../../assets/videos/main-bg.mp4";
import { useContext, useEffect, useRef } from "react";
import { LoadContext } from "@/App";

const MyHr = () => {
    return <p className={styles.hr}>{"\n"}</p>;
};

export const Main = () => {
    const videoRef = useRef(null);
    const setIsLoaded = useContext(LoadContext);

    useEffect(() => {
        const video = videoRef.current;

        const disableVideoControls = () => {
            if (video) {
                video.removeAttribute("controls");
            }
        };

        if (video) {
            video.addEventListener("playing", disableVideoControls);
        }

        return () => {
            if (video) {
                video.removeEventListener("playing", disableVideoControls);
            }
        };
    }, []);

    return (
        <main className={styles.main}>
            <video
                ref={videoRef}
                className={styles.video}
                autoPlay
                muted
                loop
                playsInline
                src={bgVideo}
                onLoad={() => setIsLoaded(true)}
            />
            <div className={`${styles.mainWrapper} my-container`}>
                <h1 className={styles.title}>
                    Acquiring <span>top NFTs</span> <MyHr /> just got simpler
                </h1>

                <div className={styles.desc}>
                    Be the first to get the best NFT project spots on Dunes INO
                    Launchpad
                </div>

                <div className={styles.box}>
                    <button className={styles.buy}>buy $DUNE</button>
                    <button className={styles.get}>Get started</button>
                </div>
            </div>
        </main>
    );
};
