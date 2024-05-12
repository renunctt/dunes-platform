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

  const amote = [
    { duration: 2, delay: 0.1, style: css.line1 },
    { duration: 1.5, delay: 0.1, style: css.line2 },
    { duration: 2, delay: 0.1, style: css.line3 },
    { duration: 1.5, delay: 0.1, style: css.line4 },
    { duration: 2, delay: 0.2, style: css.line5 },
    { duration: 2, delay: 0.2, style: css.line6 },
    { duration: 2, delay: 0.2, style: css.line7 },
    { duration: 1.5, delay: 0.2, style: css.line8 },
    { duration: 1.3, delay: 0, style: css.line9 },
    { duration: 2, delay: 0, style: css.line10 },
  ];

  return (
    <div
      id="preloader"
      className={`${css.preloader} ${visible ? css.visible : css.hidden}`}
    >
      <div className={css.container}>
        {amote.map((item) => (
          <motion.span
            key={item.duration}
            animate={{
              opacity: [1, 0.3, 0, 0.3, 1],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              repeatType: "reverse",
              delay: item.delay,
            }}
            className={item.style}
          ></motion.span>
        ))}

        <motion.div
          animate={{
            filter:
              "drop-shadow(0 0 30px rgba(255, 255, 255, 0.7)) brightness(1.5)",
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
      </div>
    </div>
  );
};

export default Preloader;
