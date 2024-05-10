import { FledAnimation } from '../FledAnimation/FledAnimation'
import { TeamCards } from '../TeamCards/TeamCards'
import styles from './ProjectTeam.module.css'
import leftIcon from '../../assets/images/team/right.svg'

export const ProjectTeam = () => {
	return (
		<section className={styles.team}>
			<div className={styles.container}>
				<div className={styles.teamWrapper}>
					<div className={styles.top}>
						<FledAnimation>
							<h2 className={styles.title}>Team</h2>
						</FledAnimation>

						<img className={styles.left} src={leftIcon} alt='' />
					</div>

					<div className='[mask-image:_linear-gradient(to_right,transparent_1%,_black_100px,_black_calc(100%-0px),transparent_0%)]'>
						<div className={styles.teamCardsMobile}>
							<TeamCards />
						</div>
					</div>
          <div className={styles.teamCards}>
          <TeamCards />

          </div>

				</div>
			</div>
		</section>
	)
}
