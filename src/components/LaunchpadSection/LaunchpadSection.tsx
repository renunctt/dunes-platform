import { useState } from 'react'
import { FinishedItems } from '../FinishedItems/FinishedItems'
import { FledAnimation } from '../FledAnimation/FledAnimation'
import styles from './LaunchpadSection.module.css'
import arrowIcon from '@/assets/images/icons/featured-arrow.svg'
import { UpcomingItems } from '../UpcomingItems/UpcomingItems'

export const LaunchpadSection = () => {
  const [isFinished, setFinished] = useState(true)

  return (
    <>
      <div className="my-container">
        <div className={styles.top}>
          <h2 className={styles.title}>
            <img className={styles.titleLeft} src={arrowIcon} alt="" />
            <FledAnimation>IDOs</FledAnimation>
            <img className={styles.titleRight} src={arrowIcon} alt="" />
          </h2>

          <div className={styles.box}>
            <button
              style={{
                color: !isFinished ? 'white' : ''
              }}
              onClick={() => setFinished(false)}
              className={`${styles.upcoming} shuffle-hover-inside`}>
              Live & Upcoming
            </button>
            <button
              style={{
                color: isFinished ? 'white' : ''
              }}
              onClick={() => setFinished(true)}
              className={`${styles.finished} shuffle-hover-inside`}>
              <p className="shuffle-hover-inside">Finished</p>
            </button>
          </div>
        </div>

        <div className={styles.items}>
          <div className={styles.topLine}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
            <div className={styles.line4}></div>
            <div className={styles.line5}></div>
          </div>
          <div className={styles.launchItem}>
          {isFinished ? <FinishedItems /> : <UpcomingItems />}

          </div>
        </div>
      </div>
    </>
  )
}
