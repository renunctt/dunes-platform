import Hero from '../components/HeroSection/Hero'
import HeroImg from '../assets/images/ido-hero.png'
import { LaunchpadSection } from '../components/LaunchpadSection/LaunchpadSection'
import { FinishedItems } from '../components/FinishedItems/FinishedItems'
import { finishedItem, upcomingItems } from '../constants/LounchpadConstants'
import { UpcomingItems } from '../components/UpcomingItems/UpcomingItems'
import styles from './IdoLaunchpad.module.css'

const Title = () => (
	<>
		Enter the Gateway of <span>IDO Launchpad</span>
	</>
)

const IdoLaunchpad = () => {
	return (
		<>
			<Hero
				title={<Title />}
				text={
					'Claim first access to the most important tokens in crypto, and then supercharge them with cutting-edge MEV tech.'
				}
				img={HeroImg}
				firstButton='buy $DUNES'
			/>
			<LaunchpadSection title='IDOs' firstItems={<FinishedItems items={finishedItem} />} secondItems={<UpcomingItems items={upcomingItems} />} />
			<div className={styles.bottom}>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
			</div>
		</>
	)
}

export default IdoLaunchpad
