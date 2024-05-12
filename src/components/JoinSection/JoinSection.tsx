import { FledAnimation } from "../FledAnimation/FledAnimation";
import styles from "./JoinSection.module.css";
import featuredIcon from "@/assets/images/icons/featured-arrow.svg";
import LeftImg from "@/assets/images/inos-image.png";

import purchaseImg from "@/assets/images/icons/purchaseImg.svg";
import stakeImg from "@/assets/images/icons/stakeImg.svg";
import applyImg from "@/assets/images/icons/applyImg.svg";
import setImg from "@/assets/images/icons/setImg.svg";
import { FledTopAnimation } from "../FledTopAnimation/FledTopAnimation";
import ScrollText from '../ScrollText'

const firstCol = [
    {
        title: "Purchase $SFUND Tokens",
        subtitle:
            "$SFUND is Seedify's token that enables its holders to participate in IDOs, INOs, stake and farm for passive income",
        icon: purchaseImg,
    },
    {
        title: "Stake or Farm your $SFUND",
        subtitle:
            "Add your $SFUND to one of our staking or farming pools and earn passive income",
        icon: stakeImg,
    },
];

const secondCol = [
    {
        title: "Apply for the lottery",
        subtitle:
            "Go to the NFT project page you'd like to join and apply for the lottery to get a chance to win a whitelist spot",
        icon: applyImg,
    },
    {
        title: "You're all set!",
        subtitle:
            "Now you just need to wait for the release of the whitelist to purchase your favorite NFT at the best price",
        icon: setImg,
    },
];

const JoinSection = () => {
    return (
        <section>
            <div className="my-container">
                <div className={styles.topWrapper}>
                    <div className={styles.top}>
                        <h2 className={styles.title}>
                            <img
                                className={styles.left}
                                src={featuredIcon}
                                alt=""
                            />
                            <FledAnimation>
                                <span><ScrollText text="HOW TO JOIN" /></span>
                            </FledAnimation>
                            <img
                                className={styles.right}
                                src={featuredIcon}
                                alt=""
                            />
                        </h2>
                    </div>
                    <div className={styles.top1}></div>
                    <div className={styles.top2}></div>
                </div>
                <div className={styles.bottomWrapper}>
                    <div className={styles.bottom}>
                        <img src={LeftImg} alt="" />
                    </div>
                    <div className={styles.bottom}>
                        {firstCol.map((item) => (
                            <FledTopAnimation key={item.title}>
                                <div className={styles.wrapper}>
                                    <img src={item.icon} alt="" />
                                    <div className={styles.bottomTitle}>
                                        {item.title}
                                    </div>
                                    <p className={styles.bottomSubtitle}>
                                        {item.subtitle}
                                    </p>
                                </div>
                            </FledTopAnimation>
                        ))}
                    </div>
                    <div className={styles.bottom}>
                        {secondCol.map((item) => (
                            <FledTopAnimation key={item.title}>
                                <div className={styles.wrapper}>
                                    <img src={item.icon} alt="" />
                                    <div className={styles.bottomTitle}>
                                        {item.title}
                                    </div>
                                    <p className={styles.bottomSubtitle}>
                                        {item.subtitle}
                                    </p>
                                </div>
                            </FledTopAnimation>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinSection;
