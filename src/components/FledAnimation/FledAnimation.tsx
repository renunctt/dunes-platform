import { useInView } from 'framer-motion'
import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import styles from './FledAnimation.module.css'

interface FledAnimationProps {
	children: ReactNode
}

export const FledAnimation: FC<FledAnimationProps> = ({ children }) => {
  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const isInView = useInView(ref, { once: true, margin: '200px 0px -200px 0px' })

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
