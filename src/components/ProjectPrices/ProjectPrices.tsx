import styles from './ProjectPrices.module.css'

export const ProjectPrices = () => {
  return (
    <section className={styles.prices}>
      <div className="my-container">
        <div className={styles.pricesWrapper}>
          <div className={styles.left}>
            <div className={styles.item}>
              <p className={styles.title}>TOKEN CHAIN</p>
              <p className={styles.price}>Ethereum</p>
            </div>
            <div className={styles.item}>
              <p className={styles.title}>TOTAL SUPPLY</p>
              <p className={styles.price}>1,000,000,000</p>
            </div>
            <div className={styles.item}>
              <p className={styles.title}>LISTING VALUATION</p>
              <p className={styles.price}>$12,000,000</p>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.item}>
              <p className={styles.title}>INITIAL CIRCULATING SUPPLY</p>
              <p className={styles.price}>7,85%</p>
            </div>
            <div className={styles.item}>
              <p className={styles.title}>TOTAL SUPPLY</p>
              <p className={styles.price}>$942,000</p>
            </div>
            <div className={styles.item}>
              <p className={styles.title}>LISTING VALUATION</p>
              <p className={styles.price}>$3,370,000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
