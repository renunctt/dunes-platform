import { useEffect, useState } from 'react'
import css from './Preloader.module.css'
import logo from '@/assets/images/preloader.png'

const Preloader = () => {
	const [visible, setVisible] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(false)
		}, 1500)

		return () => clearTimeout(timer)
	}, [])

	useEffect(() => {
		if (visible) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}

		if (!visible) {
			const timer = setTimeout(() => {
				const preloaderElement = document.getElementById('preloader')
				if (preloaderElement) {
					preloaderElement.style.zIndex = '-10'
				}
				clearTimeout(timer)
			}, 500)
			return () => clearTimeout(timer)
		}
	}, [visible])

	return (
		<div
			id='preloader'
			className={`${css.preloader} ${visible ? css.visible : css.hidden}`}
		>
			<div className={css.container}>
				<span className={css.line1}></span>
				<span className={css.line2}></span>
				<div className={css.logo}>
					<img src={logo} alt='' />
				</div>
				<span className={css.line3}></span>
				<span className={css.line4}></span>
				<span className={css.line5}></span>
				<span className={css.line6}></span>

				<span className={css.line7}></span>
				<span className={css.line8}></span>

				<span className={css.line9}></span>
				<span className={css.line10}></span>
			</div>
		</div>
	)
}

export default Preloader
