import BridgeTop from '@/components/Bridge/BridgeTop/BridgeTop'
import css from './Bridge.module.css'
import BridgeForm from '@/components/Bridge/BridgeForm/BridgeForm'

const runes1 = Array.from({ length: 11 }, (_, index) => {
	return new URL(
		`../assets/images/runes/1/${String(index + 1)}.svg`,
		import.meta.url
	).href
})

const Bridge = () => {
	return (
		<section className={css.bridge}>
			<div className={css.bridgeWrap}>
				<div className={css.runesContainer}>
					<div className={css.runes1}>
						<img className={css.r1} src={runes1[0]} alt='' />
						<img className={css.r2} src={runes1[1]} alt='' />
						<img className={css.r3} src={runes1[2]} alt='' />
						<img className={css.r4} src={runes1[3]} alt='' />
						<img className={css.r5} src={runes1[4]} alt='' />
						<img className={css.r6} src={runes1[5]} alt='' />
						<img className={css.r7} src={runes1[4]} alt='' />
						<img className={css.r8} src={runes1[6]} alt='' />
						<img className={css.r9} src={runes1[7]} alt='' />
					</div>
				</div>
				<div className={css.container}>
					<BridgeTop />
				</div>
				<div className={css.form}>
					<div className={css.container}>
						<div className={css.formContainer}>
							<BridgeForm />
						</div>
					</div>
				</div>
				<div className={css.container}>
					<div className={css.bottom}>
            <div className={css.bottomLine}></div>
          </div>
				</div>
				<div className={css.runesContainer}>
					<div className={css.runes2}>
						<img className={css.l1} src={runes1[6]} alt='' />
						<img className={css.l2} src={runes1[4]} alt='' />
						<img className={css.l3} src={runes1[8]} alt='' />
						<img className={css.l4} src={runes1[1]} alt='' />
						<img className={css.l5} src={runes1[9]} alt='' />
						<img className={css.l6} src={runes1[7]} alt='' />
						<img className={css.l7} src={runes1[0]} alt='' />
						<img className={css.l8} src={runes1[10]} alt='' />
						<img className={css.l9} src={runes1[2]} alt='' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Bridge
