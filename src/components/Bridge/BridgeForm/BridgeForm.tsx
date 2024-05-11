import FormButton from '@/components/UI/FormButton/FormButton'
import css from './BridgeForm.module.css'

const BridgeForm = () => {
	return (
		<div className={css.form}>
			<p className={css.top}>Amount & Token</p>
			<div className={css.currency}>
				<div className={css.inputWrap}>
					<input className={css.input} type='text' placeholder='0.0' />
				</div>

				<div className={css.selectWrap}>
					<select className={css.currencySelect}>
						Select a currency
						<option value='default' defaultChecked>
							Select a currency
						</option>
					</select>
				</div>
			</div>
			<div className={css.from}>
				<p className={css.text}>From to</p>
				<div className={css.selectWrap}>
					<select className={css.select}>
						Select a network
						<option value='default' defaultChecked>
							Select a network
						</option>
					</select>
				</div>
			</div>
			<div className={css.to}>
				<p className={css.text}>To</p>
				<div className={css.selectWrap}>
					<select className={css.select}>
						Select a network
						<option value='default' defaultChecked>
							Select a network
						</option>
					</select>
				</div>
			</div>

			<div className={css.change}>
				<p className={css.changeText}>
					Recipient <span>Change</span>
				</p>

				<button className={css.changeBtn}>
					<span></span>
				</button>
			</div>

			<div className={css.btn}>
				<FormButton>
					CONNECT WALLET
				</FormButton>
			</div>
		</div>
	)
}

export default BridgeForm
