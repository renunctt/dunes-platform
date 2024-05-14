import styles from './Main.module.css'
import bgVideo from '../../assets/videos/main-bg.mp4'
import { useContext, useEffect, useRef } from 'react'
import { LoadContext } from '@/App'

const MyHr = () => {
	return <p className={styles.hr}>{'\n'}</p>
}

export const Main = () => {
	const videoRef = useRef(null)
	const setIsLoaded = useContext(LoadContext);

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
				onLoad={() => setIsLoaded(true)}
			/>
			<div className={`${styles.mainWrapper} my-container`}>
				<h1 className={styles.title}>
					Join the most innovative <span>launchpad</span> <MyHr /> of 2024
				</h1>

				<div className={styles.desc}>
					Platform forged from Sands of ancient desert to provide
					incubation to Innovations on Runes protocol
				</div>

				<div className={styles.box}>
					<button className={styles.buy}>buy $DUNE</button>
					<button className={styles.get}>Get started</button>
				</div>
			</div>
		</main>
	)
}
