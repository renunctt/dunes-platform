import { useInView } from 'framer-motion'
import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import styles from './FledAnimation.module.css'
import { useScrambleText } from '@/hooks/useScrambleText'

interface FledAnimationProps {
	children: ReactNode
	isText?: boolean
}

export const FledAnimation: FC<FledAnimationProps> = ({
	children,
	isText = false,
}) => {
	const [textRef, reload] = useScrambleText()
	const ref = useRef(null)
	const [hasAnimated, setHasAnimated] = useState(false)
	const isInView = useInView(ref, {
		once: true,
		margin: '200px 0px -200px 0px',
	})

	useEffect(() => {
		if (isInView && !hasAnimated) {
			setHasAnimated(true)
			if (isText) {
				setTimeout(() => {
					reload()
				}, 400)
			}
		}
	}, [isInView])

	if (isText) {
		return (
			<section ref={ref}>
				<div
					ref={ref}
					className={`${styles.fadeInSection} ${isInView && hasAnimated ? styles.isVisible : ''}`}
				>
					<p ref={textRef}>{children}</p>
				</div>
			</section>
		)
	}

	return (
		<section ref={ref}>
			<div
				ref={ref}
				className={`${styles.fadeInSection} ${isInView && hasAnimated ? styles.isVisible : ''}`}
			>
				{children}
			</div>
		</section>
	)
}
