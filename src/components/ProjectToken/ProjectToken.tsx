import { FledAnimation } from '../FledAnimation/FledAnimation'
import styles from './ProjectToken.module.css'
import { FledTopAnimation } from '../FledTopAnimation/FledTopAnimation'
import leftIcon from '../../assets/images/team/right.svg'
import ScrollText from '../ScrollText';

export const ProjectToken = () => {
	return (
		<section className={styles.token}>
			<div className='my-container'>
				<div className={styles.tokenTop}>
					<div className={styles.tokenTopWrapper}>
						<FledAnimation>
							<h2 className={styles.title}><ScrollText text="Tokenomics" /></h2>
						</FledAnimation>

						<img className={styles.left} src={leftIcon} alt='' />
					</div>
				</div>

				<div className={styles.bottom}>

				<div className='[mask-image:_linear-gradient(to_right,transparent_1%,_black_90px,_black_calc(100%-0px),transparent_0%)]'>
				
					<div className={styles.tokenWrapper}>
						<div className={styles.tokenMics}>
							<FledTopAnimation>
								<div className={styles.top}>
									<p className={styles.topRound}>ROUND</p>
									<p className={styles.topAlloc}>TOKEN ALLOCATION</p>
									<p className={styles.topVesting}>VESTING SCHEDULE</p>
								</div>
							</FledTopAnimation>

							<FledTopAnimation>
								<div className={styles.info}>
									<p className={styles.round}>Seed Round</p>
									<p className={styles.alloc}>40,000,000</p>
									<p className={styles.vesting}>
										4% TGE, 2-month cliff, followed by daily linear vesting over
										next 12 months
									</p>
								</div>
							</FledTopAnimation>

							<FledTopAnimation>
								<div className={styles.info}>
									<p className={styles.round}>Public</p>
									<p className={styles.alloc}>100,000,000</p>
									<p className={styles.vesting}>
										12% TGE, 2-month cliff, followed by daily linear vesting
										over next 6 months
									</p>
								</div>
							</FledTopAnimation>

							<FledTopAnimation>
								<div className={styles.info}>
									<p className={styles.round}>KOL</p>
									<p className={styles.alloc}>20,000,000</p>
									<p className={styles.vesting}>
										60% TGE, Daily linear vesting over next 6 months
									</p>
								</div>
							</FledTopAnimation>

							<FledTopAnimation>
								<div className={styles.info}>
									<p className={styles.round}>Liquidity</p>
									<p className={styles.alloc}>50,000,000</p>
									<p className={styles.vesting}>
										60% TGE, Daily linear vesting over next 6 months
									</p>
								</div>
							</FledTopAnimation>

							<FledTopAnimation>
								<div className={styles.infoTeam}>
									<p className={styles.round}>Team</p>
									<p className={styles.alloc}>135,000,000</p>
									<p className={styles.vesting}>
										12-month cliff, followed by daily linear vesting over next
										48 months
									</p>
								</div>
							</FledTopAnimation>
						</div>
				</div>

					</div>
				</div>
			</div>
		</section>
	)
}
