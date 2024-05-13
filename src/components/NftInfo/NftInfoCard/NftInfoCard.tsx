import { FC } from 'react'
import css from './NftInfoCard.module.css'
import warningIcon from '@/assets/images/nft/warning.svg'

const NftInfoCard: FC<NftInfoCardProps> = props => {
	return (
		<div className={css.card}>
			<div className={css.cardImage}>
				<img src={props.nftImage} alt={props.nftFullTitle} />
				<p className={css.cardTitle}>{props.nftFullTitle}</p>
			</div>

			<div className={css.content}>
				<div className={css.desc1}>
					{props.desc}
				</div>

				<div className={css.price}>
					<div className={css.total}>
						<p className={css.desc}>TOTAL</p>
						<span>{props.total}</span>
					</div>
					<div className={css.minted}>
						<p className={css.desc}>MINTED</p>
						<span>{props.minted}</span>
					</div>
					<div className={css.reserved}>
						<p className={css.desc}>RESERVED</p>
						<span>{props.reserved}</span>
					</div>
				</div>

				<div className={css.warning}>
					<img src={warningIcon} alt='' />
					<p>Listing will be available in {props.data}</p>
				</div>

				<div className={css.info}>
					<div className={css.mint}>
						<div className={css.infoTop}>PUBLIC MINT</div>
						<div className={css.infoItems}>
							<div className={css.infoItem}>
								<p className={css.infoItemTop}>PRICE</p>
								<p className={css.infoItemDesc}>{props.publicMint.price} SEI</p>
							</div>
							<div className={css.infoItem}>
								<p className={css.infoItemTop}>ITEMS</p>
								<p className={css.infoItemDesc}>{props.publicMint.items}</p>
							</div>
							<div className={css.infoItem1}>
								<p className={css.infoItemTop}>MAX</p>
								<p className={css.infoItemDesc}>{props.publicMint.max}</p>
							</div>
						</div>
					</div>

					<div className={css.ended}>
						<div className={css.infoTop}>EVENT ENDED</div>
						<div className={css.endedItems}>
							<div className={css.endedItem}>
								<p className={css.endedItemDesc}>{props.eventEnded.days}</p>
								<p className={css.endedItemTop}>DAYS</p>
							</div>
							<div className={css.endedItem}>
								<p className={css.endedItemDesc}>{props.eventEnded.hrs}</p>
								<p className={css.endedItemTop}>HRS</p>
							</div>
							<div className={css.endedItem}>
								<p className={css.endedItemDesc}>{props.eventEnded.min}</p>
								<p className={css.endedItemTop}>MIN</p>
							</div>
							<div className={css.endedItem1}>
								<p className={css.endedItemDesc}>{props.eventEnded.sec}</p>
								<p className={css.endedItemTop}>SEC</p>
							</div>
						</div>
					</div>
				</div>

				<div className={css.bottom}>
					<div className={css.progress}>
						<div className={css.progressInfo}>
							<p>100%</p>
							<p>(2,119 / 2,119)</p>
						</div>
						<div className={css.progressLine}>
							<span></span>
						</div>
					</div>

					<div className={css.socials}>
						{props.socials.map(item => {
							return (
								<a className={css.socialsLink} key={item.alt} href={item.link}>
									<img src={item.icon} alt={item.alt} />
								</a>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default NftInfoCard
