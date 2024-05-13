import { FC, useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import styles from "./INOSItem.module.css";
import { Link } from "react-router-dom";

import tetherIcon from '../../assets/images/icons/tether.svg'
import { inosItemProps } from "../../constants/propsConstants";

interface SectionProps {
    children: React.ReactNode;
    margin: string;
}

const Section: FC<SectionProps> = ({ children, margin }) => {
    const ref = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const isInView = useInView(ref, {
        once: true,
        margin: margin,
    });

    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [isInView]);

    return (
        <section ref={ref} className={styles.section}>
            <div
                ref={ref}
                className={`${styles.fadeInSection} ${isInView && hasAnimated ? styles.isVisible : ""}`}
            >
                {children}
            </div>
        </section>
    );
};

const INOSItem = (item:inosItemProps) => {
    return (
        <Section margin={item.margin}>
            <div className={styles.item}>
                <div className={styles.top}>
                    <img className={styles.img} src={item.img} alt="" />
                </div>

                <div className={styles.title}>{item.title}</div>

                <div className={styles.info}>
                    <div className={styles.desc}>
                        <div className={styles.descRaised}>TOTAL RAISED</div>
                        <div className={styles.descItems}>ITEMS</div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.price}>
                            <img src={tetherIcon} alt="USDT" />
                            {item.price}
                        </div>
                        <div className={styles.items}>{item.items}</div>
                    </div>
                </div>

                <Link
                    to={"/nft-info"}
                    className={styles.detail}
                >
                    MORE DETAILS
                </Link>
            </div>
        </Section>
    );
};

export default INOSItem;
