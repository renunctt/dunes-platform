import css from './BridgeTop.module.css'

const BridgeTop = () => {
	return (
		<div className={css.top}>
			<h1 className={css.title}>
				Bridge <span>Tokens</span>
			</h1>

			<p className={css.desc}>Transfer tokens between networks</p>
		</div>
	)
}

export default BridgeTop
