import styles from './SwapCalc.module.css'
import { cryptos } from '../../configs/cryptos-config'
import { useState } from 'react'
import swapIcon from '../../assets/images/cryptos/swap-icon.svg'

const getCryptos = [...cryptos]

export const SwapCalc = () => {
	const [selectedCrypto, setSelectedCrypto] = useState(cryptos[0])
	const [selectedGetCrypto, setSelectedGetCrypto] = useState(getCryptos[2])
	const [value, setValue] = useState('1')
	const [value2, setValue2] = useState('')

	const handleChange = event => {
		const inputValue = event.target.value
		const cleanedValue = inputValue.replace(/[^\d.]/g, '')
		setValue(cleanedValue)
		calc()
	}

	const handleChangeGet = event => {
		const inputValue = event.target.value
		const cleanedValue = inputValue.replace(/[^\d.]/g, '')
		setValue2(cleanedValue)
		calc2()
	}

	const handleCryptoChange = event => {
		const selectedAbbr = event.target.value
		const selectedCrypto = cryptos.find(crypto => crypto.abbr === selectedAbbr)
		setSelectedCrypto(selectedCrypto)
		calc()
	}

	const handleGetCryptoChange = event => {
		const selectedAbbr = event.target.value
		const selectedCrypto = getCryptos.find(
			crypto => crypto.abbr === selectedAbbr
		)
		setSelectedGetCrypto(selectedCrypto)
		calc2()
	}

	const calc = () => {
		const n = parseFloat(
			(
				(Number(value) * Number(selectedCrypto.defaultPrice)) /
				Number(selectedGetCrypto.defaultPrice)
			).toFixed(7)
		)
		setValue2(String(n))
	}

	const calc2 = () => {
		const n = parseFloat(
			(
				(Number(value2) * (Number(selectedGetCrypto.defaultPrice)) /
				Number(selectedCrypto.defaultPrice))
			).toFixed(7)
		)
		setValue(String(n))
	}

	return (
		<aside className={styles.calc}>
			<div className={styles.top}>
				<div className={styles.topLeft}>Crypto Exchange</div>
				<div className={styles.topRight}>Buy/Sell Crypto</div>
			</div>

			<div className={styles.mid}>
				<div className={styles.info}>You send</div>
				<div className={styles.send}>
					<div className={styles.sendWallet}>
						{selectedCrypto && (
							<img
								className={styles.cryptoIcon}
								src={selectedCrypto.icon}
								alt={selectedCrypto.abbr}
							/>
						)}
						<select
							value={selectedCrypto.abbr}
							onChange={handleCryptoChange}
							className={styles.sendSelect}
						>
							{cryptos.map(crypto => {
								return (
									<option key={crypto.abbr} value={crypto.abbr}>
										{crypto.abbr}
									</option>
								)
							})}
						</select>
					</div>

					<div className={styles.inputWrap}>
						<input
							className={styles.input}
							value={value}
							onChange={calc}
							type='text'
							name=''
							id=''
						/>
					</div>
				</div>

				<div className={styles.swapBtnWrap}>
					<button className={styles.swapBtn}>
						<img src={swapIcon} alt='' />
					</button>
				</div>

				<div className={styles.info}>You get</div>
				<div className={styles.send}>
					<div className={styles.sendWallet}>
						{selectedGetCrypto && (
							<img
								className={styles.cryptoIcon}
								src={selectedGetCrypto.icon}
								alt={selectedGetCrypto.abbr}
							/>
						)}
						<select
							value={selectedGetCrypto.abbr}
							onChange={handleGetCryptoChange}
							className={styles.sendSelect}
						>
							{cryptos.map(crypto => {
								return (
									<option key={crypto.abbr} value={crypto.abbr}>
										{crypto.abbr}
									</option>
								)
							})}
						</select>
					</div>

					<div className={styles.inputWrap}>
						<input
							className={styles.input}
							value={value2}
							onChange={handleChangeGet}
							type='text'
							name=''
							id=''
						/>
					</div>
				</div>
			</div>

			<button className={styles.exchange}>EXCHANGE</button>
		</aside>
	)
}
