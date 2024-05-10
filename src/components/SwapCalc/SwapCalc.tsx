import styles from './SwapCalc.module.css'

export const SwapCalc = () => {
	return (
		<aside className={styles.calc}>
			<div className={styles.top}>
				<button>Crypto Exchange</button>
				<button>Buy/Sell Crypto</button>
			</div>

			<div className={styles.mid}>
				<div>You send</div>
				
			</div>
		</aside>
	)
}