import { useEffect, useState } from "react";
import css from "./Preloader.module.css";
import logo from "@/assets/images/preloader.png";
import { motion } from "framer-motion";

const Preloader = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (visible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        if (!visible) {
            const timer = setTimeout(() => {
                const preloaderElement = document.getElementById("preloader");
                if (preloaderElement) {
                    preloaderElement.style.zIndex = "-10";
                }
                clearTimeout(timer);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [visible]);

    return (
        <div
            id="preloader"
            className={`${css.preloader} ${visible ? css.visible : css.hidden}`}
        >
            <div className={css.container}>
                <motion.span
                    animate={{
                        opacity: [1, 0, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 0.4,
                    }}
                    className={css.line1}
                ></motion.span>
                <motion.span
                    animate={{
                        opacity: [1, 0, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 0.4,
                    }}
                    className={css.line2}
                ></motion.span>
                <motion.div
                    animate={{
                        filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.7)) brightness(1.5)',
						opacity: [0.8, 1],
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className={css.logo}
                >
                    <img src={logo} alt="" />
                </motion.div>
                <motion.span
                    animate={{
                        opacity: [1, 0, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 0.1,
                    }}
                    className={css.line3}
                ></motion.span>
                <motion.span
                    animate={{
                        opacity: [1, 0, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className={css.line4}
                ></motion.span>
                <motion.span
                    animate={{
                        opacity: [1, 0, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 0.3,
                    }}
                    className={css.line5}
                ></motion.span>
                <motion.span
                    animate={{
                        opacity: [1, 0, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 0.3,
                    }}
                    className={css.line6}
                ></motion.span>
                <motion.span
                    animate={{
                        opacity: [1, 0, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className={css.line7}
                ></motion.span>
                <motion.span
                    animate={{
                        opacity: [1, 0, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className={css.line8}
                ></motion.span>
                <motion.span
                    animate={{
                        opacity: [1, 0, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 0.4,
                    }}
                    className={css.line9}
                ></motion.span>
                <motion.span
                    animate={{
                        opacity: [1, 0, 1],
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 0.4,
                    }}
                    className={css.line10}
                ></motion.span>
            </div>
        </div>
    );
};

export default Preloader;
