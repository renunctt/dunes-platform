import styles from './Main.module.css'
import bgVideo from '../../assets/videos/main-bg.mp4'
import { useEffect, useRef } from 'react'

const MyHr = () => {
	return <p className={styles.hr}>{'\n'}</p>
}

export const Main = () => {
	const videoRef = useRef(null)

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
		<main className={styles.main}>
			<video
				ref={videoRef}
				className={styles.video}
				autoPlay
				muted
				loop
				playsInline
				src={bgVideo}
			/>
			<div className={`${styles.mainWrapper} my-container`}>
				<h1 className={styles.title}>
					Join the most innovative <span>launchpad</span> of 2024
				</h1>

				<div className={styles.desc}>
					Platform forged from Sands <MyHr /> of ancient desert to provide
					incubation <MyHr /> to Innovations on Runes protocol
				</div>

				<div className={styles.box}>
					<button className={styles.buy}>buy $DUNES</button>
					<button className={styles.get}>Get started</button>
				</div>
			</div>
		</main>
	)
}
