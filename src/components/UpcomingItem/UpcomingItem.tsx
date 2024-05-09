import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import styles from './UpcomingItem.module.css'
import { useInView } from 'framer-motion'

export interface UpcomingItemProps {
  img: string
  icon: string
  title: string
  margin: string
}

interface SectionProps {
	children: ReactNode
	margin: string
}

const Section: FC<SectionProps> = ({ children, margin }) => {
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

export const UpcomingItem: FC<UpcomingItemProps> = (item) => {
  return (
    <Section margin={item.margin}>
      <div className={styles.item}>
        <div className={styles.top}>
          <img className={styles.img} src={item.img} alt="" />
          <img className={styles.icon} src={item.icon} alt="" />
        </div>

        <h3 className={styles.title}>{item.title}</h3>

        <div className={styles.info}>
          <p>TOTAL RAISED</p>
          <span>TBA</span>
        </div>
        <div className={styles.info}>
          <p>ATH ROI</p>
          <span>TBA</span>
        </div>
        <div className={styles.info}>
          <p>ATH ROI</p>
          <span>TBA</span>
        </div>
        <div className={styles.info}>
          <p>ATH ROI</p>
          <span>TBA</span>
        </div>

        <div className={styles.tba}>
          <span className={styles.tbaLeft}></span>
          <p className={styles.tbaTitle}>TBA</p>
          <span className={styles.tbaRight}></span>
        </div>
      </div>
    </Section>
  )
}
