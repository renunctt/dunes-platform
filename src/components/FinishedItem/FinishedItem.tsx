import { FC, useEffect, useRef, useState } from 'react'
import styles from './FinishedItem.module.css'
import tetherIcon from '../../assets/images/icons/tether.svg'
import { useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ItemProps } from '../../constants/propsConstants'
interface SectionProps {
  children: React.ReactNode;
  margin: string;
}

const Section: FC<SectionProps>  = ({ children, margin }) => {
  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const isInView = useInView(ref, {
    once: true,
    margin: margin
  })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView])

  return (
    <section ref={ref}>
      <div
        ref={ref}
        className={`${styles.fadeInSection} ${isInView && hasAnimated ? styles.isVisible : ''}`}>
        {children}
      </div>
    </section>
  )
}

export const FinishedItem: FC<ItemProps> = (item) => {
  return (
    <Section margin={item.margin}>
      <div className={styles.item}>
        <div className={styles.top}>
          <img className={styles.img} src={item.img} alt="" />
          <img className={styles.icon} src={item.icon} alt="" />
        </div>

        <div className={styles.title}>{item.title}</div>

        <div className={styles.info}>
          <div className={styles.desc}>
            <div className={styles.descRaised}>TOTAL RAISED</div>
            <div className={styles.descRoi}>ATH ROI</div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.price}>
              <img src={tetherIcon} alt="USDT" />
              {item.price}
            </div>
            <div className={styles.roi}>{item.roi}x</div>
          </div>
        </div>
        <div className={styles.social}>
          {item.socials.map((social) => {
            return (
              <a href={social.link} key={social.alt}>
                <img
                  className={styles.socialIcon}
                  src={social.icon}
                  alt={social.alt}
                />
              </a>
            )
          })}
        </div>

        <Link to={'/project-info'} className={styles.detail}>MORE DETAILS</Link>
      </div>
    </Section>
  )
}
