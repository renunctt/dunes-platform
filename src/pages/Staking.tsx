import styles from './Staking.module.css'

import stakingImg from '../assets/images/stakingImg.png'
import warningIcon from '@/assets/images/card/warning.svg'

import binanceIcon from '@/assets/images/stockMarket/binanceIcon.svg'
import ethereumIcon from '@/assets/images/stockMarket/EthereumIcon.svg'
import arbitrumIcon from '@/assets/images/stockMarket/ArbitrumIcon.svg'
import { useEffect, useState } from 'react'
import { FledTopAnimation } from '@/components/FledTopAnimation/FledTopAnimation'

const markets = [
	{ img: binanceIcon, name: 'Binance' },
	{ img: ethereumIcon, name: 'Ethereum' },
	{ img: arbitrumIcon, name: 'Arbitrum' },
]

const days = ['30 Days', '90 Days', '180 Days', '270 Days']

const Staking = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const [market, setMarket] = useState('Binance')
	const [day, setDay] = useState('30 Days')

	return (
		<div className={styles.container}>
			<div className={styles.leftWrapper}>
				<h2 className={styles.title}>
					<span>Stake</span> your $DUNE to join the best <span>IDOs</span>
				</h2>
				<button className={styles.leftButton}>buy $DUNE</button>
				<div className={styles.warningWrapper}>
					<img src={warningIcon} alt='warning image' />
					Legacy $DUNE staking and farming pools are closed. The new pools are
					open with Seed Staking Boosters. You can deposit now.
				</div>
				<img src={stakingImg} alt='' className={styles.bgImage} />
			</div>
			<div className={styles.rightWrapper}>
				<div className={styles.right}>
					<FledTopAnimation>
						<div className={styles.wrapper}>
							{markets.map(item => (
								<button
									className={`${styles.text} ${item.name === market ? styles.active : ''}`}
									key={item.name}
									onClick={() => setMarket(item.name)}
								>
									<img src={item.img} alt='Binance' />
									{item.name}
								</button>
							))}
						</div>
						<div className={styles.wrapper}>
							{days.map(item => (
								<button
									className={`${styles.text} ${item === day ? styles.active : ''}`}
									key={item}
									onClick={() => setDay(item)}
								>
									{item}
								</button>
							))}
						</div>
						<div className={styles.middleInfoWrapper}>
							<div className={styles.infoText}>
								<div>Staked Amount</div>0 $DUNE
							</div>
							<div className={`${styles.infoText} ${styles.middleInfoText}`}>
								<div>Waller Balance</div>0 $DUNE
							</div>
							<div className={styles.infoText}>
								<div>
									Allowance <span>(Edit)</span>
								</div>
								0 $DUNE
							</div>
						</div>
						<div className={styles.enterWrapper}>
							<input
								type='text'
								placeholder='Enter Stake Amount ($DUNE Amount)'
							/>
							<button className={styles.enterButton}>MAX</button>
						</div>
						<div className={styles.bottomInfoWrapper}>
							<div className={styles.bottomInfoItem}>
								<div className={styles.topInfoText}>APR Rate</div>
								<div className={styles.bottomInfoText}>1%</div>
							</div>
							<div className={styles.bottomInfoItem}>
								<div className={styles.topInfoText}>Maturity Date</div>
								<div className={styles.bottomInfoText}>--</div>
							</div>
							<div className={styles.bottomInfoItem}>
								<div className={styles.topInfoText}>Reward Balance</div>
								<div className={styles.bottomInfoText}>--</div>
							</div>
						</div>
						<button className={styles.rightButton}>CONNECT WALLET</button>
					</FledTopAnimation>
				</div>
			</div>
		</div>
	)
}

export default Staking
