import styles from './Main.module.css'
import bgVideo from '../../assets/videos/main-bg2.mp4'

export const Main = () => {
  return (
    <main className={styles.main}>
      <div className={`${styles.mainWrapper} my-container`}>
        <video
          className={styles.video}
          autoPlay 
          loop 
          muted 
          src={bgVideo}
        />
        
        <h1 className={styles.title}>
          Join the most innovative <span>launchpad</span> of 2024
        </h1>

        <p className={styles.desc}>
          Platform forged from Sands of ancient desert to provide incubation to Innovations on Runes protocol
        </p>

        <div className={styles.box}>
          <button className={styles.buy}>
            buy $DUNES
          </button>
          <button className={styles.get}>
            Get started
          </button>
        </div>
      </div>
    </main>
  )
}