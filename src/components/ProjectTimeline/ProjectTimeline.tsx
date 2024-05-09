import styles from './ProjectTimeline.module.css'
import timelineIcon1 from '../../assets/images/icons/timeline1.svg'
import timelineIcon2 from '../../assets/images/icons/timeline2.svg'

export const ProjectTimeline = () => {
  return (
    <section className={styles.timeline}>
      <div className="my-container">
        <div className={styles.timelineWrapper}>
          <div className={styles.item}>
            <img src={timelineIcon1} alt="" />
            <p className={styles.title}>UPCOMING</p>
            <p className={styles.data}>Apr 29, 14:02 UTC</p>
          </div>

          <span className={styles.line}></span>

          <div className={styles.item}>
            <img src={timelineIcon2} alt="" />
            <p className={styles.title}>ACTIVE</p>
            <p className={styles.data}>May 14, 11:00 UTC</p>
          </div>
          <span className={styles.line}></span>

          <div className={styles.item}>
            <img src={timelineIcon2} alt="" />
            <p className={styles.title}>AWAITING</p>
            <p className={styles.data}>May 16, 11:00 UTC</p>
          </div>
          <span className={styles.line}></span>

          <div className={styles.item}>
            <img src={timelineIcon2} alt="" />
            <p className={styles.title}>VESTING</p>
          </div>
          <span className={styles.line}></span>

          <div className={styles.item}>
            <img src={timelineIcon2} alt="" />
            <p className={styles.title}>COMPLETED</p>
          </div>

          <div className={styles.mobile}>
            <div className={styles.mobileTop}>
              <div className={styles.mobileItem}>
                <img src={timelineIcon1} alt="" />
                <p className={styles.title}>ACTIVE</p>
                <p className={styles.data}>Apr 29, 14:02 UTC</p>
              </div>
							<div className={styles.line2}></div>
              <div className={styles.mobileItem}>
                <img src={timelineIcon2} alt="" />
                <p className={styles.title}>AWAITING</p>
                <p className={styles.data}>May 14, 11:00 UTC</p>
              </div>
							<div className={styles.line2}></div>

              <div className={styles.mobileItem}>
                <img src={timelineIcon2} alt="" />
                <p className={styles.title}>UPCOMING</p>
                <p className={styles.data}>May 16, 11:00 UTC</p>
              </div>
            </div>

            <div className={styles.mobileBottom}>
              <div className={styles.mobileItem}>
                <img src={timelineIcon2} alt="" />
                <p className={styles.title}>VESTING</p>
              </div>
							<div className={styles.line2}></div>

              <div className={styles.mobileItem}>
                <img src={timelineIcon2} alt="" />
                <p className={styles.title}>COMPLETED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
