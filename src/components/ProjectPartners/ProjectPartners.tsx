import { FledAnimation } from '../FledAnimation/FledAnimation'
import ScrollText from '../ScrollText'
import { LinearRunner } from '../UI/LinearRunner'
import styles from './ProjectPartners.module.css'

export const ProjectPartners = () => {
	return (
		<section className='my-container'>
			<div className={styles.partners}>
				<FledAnimation>
					<h2 className={styles.title}><ScrollText text="Partners" /></h2>
				</FledAnimation>

				<div className={styles.runner}>
					<LinearRunner />
				</div>
			</div>
		</section>
	)
}
