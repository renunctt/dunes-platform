import styles from './CardItem.module.css'
import EvermoonIcon from '@/assets/images/card/evermoon.png'

import twitterIcon from '@/assets/images/card/twitter.svg'
import wwwIcon from '@/assets/images/card/www.svg'
import discordIcon from '@/assets/images/card/discord.svg'
import telegramIcon from '@/assets/images/card/telegram.svg'
import warningIcon from '@/assets/images/card/warning.svg'
import bgVideo from '@/assets/videos/evermoon.mp4'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

interface SectionProps {
	children: ReactNode
}

function Section({ children }: SectionProps) {
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
				className={`${styles.fadeInSection} ${isInView && hasAnimated ? styles.isVisible : ''}`}
			>
				{children}
			</div>
		</section>
	)
}

export const CardItem = () => {
	const videoRef = useRef(null)
	const [progress, setProgress] = useState(0)
	const [isPlaying, setIsPlaying] = useState(false)

	useEffect(() => {
		const video = videoRef.current

		const updateProgress = () => {
			if (video) {
				const progress = (video.currentTime / video.duration) * 100
				setProgress(progress)
			}
		}

		const handlePlay = () => {
			setIsPlaying(true)
		}

		const handlePause = () => {
			setIsPlaying(false)
		}

		const handleEnded = () => {
			setProgress(0) // Сброс анимации при завершении видео
		}

		video.addEventListener('timeupdate', updateProgress)
		video.addEventListener('play', handlePlay)
		video.addEventListener('pause', handlePause)
		video.addEventListener('ended', handleEnded)

		return () => {
			video.removeEventListener('timeupdate', updateProgress)
			video.removeEventListener('play', handlePlay)
			video.removeEventListener('pause', handlePause)
			video.removeEventListener('ended', handleEnded)
		}
	}, [])

	useEffect(() => {
		const video = videoRef.current

		const disableVideoControls = () => {
			if (video) {
				video.removeAttribute('controls')
			}
		}

		if (video) {
			video.addEventListener('playing', disableVideoControls)
		}

		return () => {
			if (video) {
				video.removeEventListener('playing', disableVideoControls)
			}
		}
	}, [])

	return (
		<div className={styles.card}>
			<div className={styles.left}>
				<div className={styles.top}></div>
				<div className={styles.leftTopHidden}></div>

				<Section>
					<div className={styles.content}>
						<h3 className={styles.title}>
							<img src={EvermoonIcon} alt='Evermoon' />
							Evermoon
						</h3>

						<div className={styles.social}>
							<a href='https://twitter.com'>
								<img src={twitterIcon} alt='twitter' />
							</a>
							<a href='https://google.com'>
								<img src={wwwIcon} alt='world wide web' />
							</a>
							<a href='https://discord.com'>
								<img src={discordIcon} alt='discord' />
							</a>
							<a href='https://telegram.org'>
								<img src={telegramIcon} alt='telegram' />
							</a>
						</div>

						<div className={styles.contentBox}>
							<button className={styles.btn}>Gaming</button>
							<button className={styles.btn}>Web3</button>
						</div>

						<p className={styles.info}>Next-Gen 5v5 3-lane MOBA</p>

						<p className={styles.desc}>
							Total Raise: <span>$300,000</span>
						</p>
						<p className={styles.desc}>
							Registration Ends in: <span>8d 6h 50m 31s</span>
						</p>

						<div className={styles.bottomBox}>
							<Link
								to={'/project-info'}
								className={`${styles.bottomBtn} shuffle-hover-inside`}
							>
								PARTICIPATE NOW
							</Link>

							<span>
								<img src={warningIcon} alt='warning' />
								No KYC required to opt-in
							</span>
						</div>
					</div>
				</Section>
			</div>

			<div className={styles.right}>
				<div className={styles.cardTop}></div>
				<div className={styles.cardBottom}>
					<Section>
						<div className={styles.progress}>
							<div
								className={styles.progressLine}
								style={{
									width: `${progress}%`,
									height: '100%',
									transition: isPlaying ? 'width 0.3s ease' : 'none', // Добавляем анимацию изменения ширины
								}}
							></div>
						</div>
						<div className={styles.videoWrapper}>
							<video
								ref={videoRef}
								className={styles.video}
								autoPlay
								muted
								loop
								playsInline
								src={bgVideo}
							/>
							<div className={styles.triangle}></div>
						</div>
					</Section>
				</div>
			</div>
		</div>
	)
}
