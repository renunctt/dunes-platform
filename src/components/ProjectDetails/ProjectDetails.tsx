import styles from './ProjectDetails.module.css'

import twitterIcon from '../../assets/images/card/twitter.svg'
import wwwIcon from '../../assets/images/card/www.svg'
import discordIcon from '../../assets/images/card/discord.svg'
import telegramIcon from '@/assets/images/card/telegram.svg'
import EvermoonIcon from '@/assets/images/card/evermoon.png'
import arrowIcon from '@/assets/images/icons/featured-arrow.svg'
import { FledAnimation } from '../FledAnimation/FledAnimation'

export const ProjectDetails = () => {
  return (
    <div className={styles.details}>
      <div className="my-container">
        <div className={styles.detailsWrapper}>
          <div className={styles.top}>
            <h1 className={styles.title}>
              <img className={styles.titleLeft} src={arrowIcon} alt="" />

              <FledAnimation>
                <div className={styles.text}>
                  <img className={styles.titleIcon} src={EvermoonIcon} alt="" />
                  Evermoon
                </div>
              </FledAnimation>
              <img className={styles.titleRight} src={arrowIcon} alt="" />
            </h1>

            <div className={styles.mobileSocial}>
              <a href="https://twitter.com">
                <img src={twitterIcon} alt="twitter" />
              </a>
              <a href="https://google.com">
                <img src={wwwIcon} alt="google" />
              </a>
              <a href="https://discord.com">
                <img src={discordIcon} alt="discord" />
              </a>
              <a href="https://telegram.org">
                <img src={telegramIcon} alt="telegram" />
              </a>
            </div>

            <div className={styles.box}>
              <button className={styles.detailsBtn}>Project details</button>
              <button className={styles.idoDetailsBtn}>IDO details</button>
            </div>
          </div>

          <div className={styles.social}>
            <a href="https://twitter.com">
              <img src={twitterIcon} alt="twitter" />
            </a>
            <a href="https://google.com">
              <img src={wwwIcon} alt="google" />
            </a>
            <a href="https://discord.com">
              <img src={discordIcon} alt="discord" />
            </a>
            <a href="https://telegram.org">
              <img src={telegramIcon} alt="telegram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
