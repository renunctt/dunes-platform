import { SwapCalc } from "../components/SwapCalc/SwapCalc";
import styles from "./Swap.module.css";
import heroCoin1 from "../assets/images/hero-coin.png";
import heroCoin2 from "../assets/images/hero-coin-2.png";

export const Swap = () => {
  return (
    <section className={styles.swap}>
      <div className={styles.container}>
        <img className={styles.hero1} src={heroCoin1} alt="" />

        <h1 className={styles.title}>
          Compare and swap crypto at the <span>best rates</span>
        </h1>

        <div className={styles.calc}>
          <p className={styles.info}>
            Swap crypto tokens in a single transaction
          </p>
          <div className={styles.line2}></div>
          <div className={styles.calcWrap}>
            <SwapCalc />
          </div>
        </div>
        <img className={styles.hero2} src={heroCoin2} alt="" />
      </div>
      <div className={styles.line}></div>
      <div className={styles.container2}>
        <div className={styles.containerLine}></div>
      </div>
    </section>
  );
};
