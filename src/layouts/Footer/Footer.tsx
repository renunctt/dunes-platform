import { Link } from 'react-router-dom'
import Logo from '@/components/UI/Logo/Logo'
import styles from './Footer.module.css'
import twitterIcon from '@/assets/images/card/twitter.svg'
import discordIcon from '@/assets/images/card/discord.svg'
import telegramIcon from '@/assets/images/card/telegram.svg'
import bigLogo from '@/assets/images/icons/big-logo.svg'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerWrapper} my-container`}>
        <Logo />

        <div className={styles.content}>
          <div className={styles.links}>
            <a className={styles.link} href="#">
              <p className="shuffle-hover-inside">Our solutions</p>
            </a>
            <a className={styles.link} href="#">
              <p className="shuffle-hover-inside">Documentation</p>
            </a>
            <a className={styles.link} href="#">
              <p className="shuffle-hover-inside">Roadmap</p>
            </a>
          </div>

          <div className={styles.links}>
            <Link to={'/'}>
            <div className={styles.itemLink}>
                <p className="shuffle-hover-inside">Home</p>
              </div>
            </Link>
            <Link to={'/'}>
              <div className={styles.itemLink}>
                <p className="shuffle-hover-inside">Launchpad</p>
              </div>
            </Link>
            <Link to={'/'}>
              <div className={styles.itemLink}>
                <p className="shuffle-hover-inside">Advisors</p>
              </div>
            </Link>
          </div>

          <div className={styles.social}>
            <p>Follow us</p>
            <div className={styles.socialLinks}>
              <a href="https://twitter.com">
                <img src={twitterIcon} alt="" />
              </a>
              <a href="https://discord.com">
                <img src={discordIcon} alt="" />
              </a>
              <a href="https://telegram.org">
                <img src={telegramIcon} alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bigLogo}>
          <img src={bigLogo} alt="" />
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="my-container">
          <p className={styles.bottomDesc}>
            Dunes (c) 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
