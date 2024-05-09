import styles from './TeamCard.module.css'
import arrowIcon from '../../assets/images/team/arrow-white.svg'
import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface TeamCardProps {
  img: string
  name: string
  margin: string
}

interface SectionProps {
	children: ReactNode
	margin: string
}

const Section: FC<SectionProps> =({ children, margin }) => {
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

export const TeamCard: FC<TeamCardProps> = (props) => {
  return (
    <Section margin={props.margin}>
      <div className={styles.card}>
        <img className={styles.arrow} src={arrowIcon} alt="" />
        <img className={styles.img} src={props.img} alt="" />
        <h4 className={styles.name}>{props.name}</h4>
        <p className={styles.desc}>
					<span>

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis
          aliquet urna. Ut vel tincidunt purus. Curabitur est orci, vestibulum
          ut euismod sed, mattis condimentum justo.
					</span>

        </p>
      </div>
    </Section>
  )
}
