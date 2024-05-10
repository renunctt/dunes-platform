import styles from './ApplySection.module.css'
import applyFrame from '../../assets/images/frames/apply-frame.svg'
import arrowICon from '../../assets/images/icons/featured-arrow.svg'
import { FledAnimation } from '../FledAnimation/FledAnimation'
import bgImage from '../../assets/images/launch-hero.png'
import totemImage from '../../assets/images/totem.png'
import { useEffect, useState } from 'react'
import greenSpr from '../../assets/images/green-spr.png'

export const ApplySection = () => {
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setCursorPosition({ x: e.clientX, y: e.clientY })
		}

		window.addEventListener('mousemove', handleMouseMove)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	return (
		<section className={styles.apply}>
			<div className={styles.bgHeroWrap}>
				<div className={styles.bgHero}>
					<img src={bgImage} alt='' />
				</div>
			</div>

			<div className='my-container'>
				<div className={styles.applyWrapper}>
					<div className={styles.left}>
						<div className={styles.top}></div>

						<div className={styles.line1}></div>
						<div className={styles.lineY}></div>
						<h2 className={styles.title}>
							<FledAnimation>
								Aiming for successful token listing?
							</FledAnimation>
							<img className={styles.titleIcon} src={arrowICon} alt='' />
						</h2>
						<div className={styles.line2}></div>

						<FledAnimation>
							<p className={styles.desc}>Launch on Dunes Platform</p>
						</FledAnimation>
						<div className={styles.box}>
							<FledAnimation>
								<button className={styles.btn}>
									<img src={applyFrame} alt='' />
									Apply for IDO
								</button>
							</FledAnimation>
						</div>

						<div className={styles.line3}></div>

						<div className={styles.bottom}></div>
						<div
							className={styles.totem}
							style={{
								transform: `translate(-${cursorPosition.x / 20}px, -${cursorPosition.y / 20}px)`,
							}}
						>
							<img src={totemImage} alt='' />
						</div>
					</div>

					<div className={styles.right}>
						<div className={styles.rightLine}></div>
					</div>
				</div>
			</div>
		</section>
	)
}
