import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import styles from './FledTopAnimation.module.css'
import { useInView } from 'framer-motion'

interface FledTopAnimationProps {
	children: ReactNode
}

export const FledTopAnimation: FC<FledTopAnimationProps> = ({ children }) => {
  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const isInView = useInView(ref, { once: true })

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