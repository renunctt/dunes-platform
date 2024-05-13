import { FC } from 'react'
import css from './NftInfoTop.module.css'
import arrowIcon from '@/assets/images/icons/arrow-green.svg'

const NftInfoTop: FC<NftInfoTopProps> = ({ name, description }) => {
	return (
		<div className={css.top}>
			<div className={css.titleWrap}>
				<div className={css.title}>
					<img className={css.left} src={arrowIcon} alt='' />
					<span>INO</span> Launchpad
					<img className={css.right} src={arrowIcon} alt='' />
				</div>
			</div>

			<div className={css.content}>
				<div className={css.name}>
					{name}
				</div>

				<div className={css.desc}>
					<p>{description}</p>
				</div>
			</div>
		</div>
	)
}

export default NftInfoTop
