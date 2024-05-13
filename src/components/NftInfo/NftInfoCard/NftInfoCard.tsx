import { FC } from 'react'
import css from './NftInfoCard.module.css'
import warningIcon from '@/assets/images/nft/warning.svg'
import { FledTopAnimation } from '@/components/FledTopAnimation/FledTopAnimation'

const NftInfoCard: FC<NftInfoCardProps> = props => {
	return (
		<div className={css.card}>
			<FledTopAnimation>
				<div className={css.cardImage}>
					<img src={props.nftImage} alt={props.nftFullTitle} />
					<p className={css.cardTitle}>{props.nftFullTitle}</p>
				</div>
			</FledTopAnimation>

			<div className={css.content}>
				<FledTopAnimation>
					<div className={css.desc1}>{props.desc}</div>
				</FledTopAnimation>

				<div className={css.price}>
					<div className={css.total}>
						<FledTopAnimation>
							<p className={css.desc}>TOTAL</p>
							<span>{props.total}</span>
						</FledTopAnimation>
					</div>
					<div className={css.minted}>
						<FledTopAnimation>
							<p className={css.desc}>MINTED</p>
							<span>{props.minted}</span>
						</FledTopAnimation>
					</div>
					<div className={css.reserved}>
						<FledTopAnimation>
							<p className={css.desc}>RESERVED</p>
							<span>{props.reserved}</span>
						</FledTopAnimation>
					</div>
				</div>
				<FledTopAnimation>
					<div className={css.warning}>
						<img src={warningIcon} alt='' />
						<p>Listing will be available in {props.data}</p>
					</div>
				</FledTopAnimation>

				<div className={css.info}>
					<div className={css.mint}>
						<FledTopAnimation>
							<div className={css.infoTop}>PUBLIC MINT</div>
						</FledTopAnimation>

						<div className={css.infoItems}>
							<div className={css.infoItem}>
								<FledTopAnimation>
									<p className={css.infoItemTop}>PRICE</p>
								</FledTopAnimation>
								<FledTopAnimation>
									<p className={css.infoItemDesc}>
										{props.publicMint.price} SEI
									</p>
								</FledTopAnimation>
							</div>
							<div className={css.infoItem}>
								<FledTopAnimation>
									<p className={css.infoItemTop}>ITEMS</p>
								</FledTopAnimation>
								<FledTopAnimation>
									<p className={css.infoItemDesc}>{props.publicMint.items}</p>
								</FledTopAnimation>
							</div>
							<div className={css.infoItem1}>
								<FledTopAnimation>
									<p className={css.infoItemTop}>MAX</p>
								</FledTopAnimation>
								<FledTopAnimation>
									<p className={css.infoItemDesc}>{props.publicMint.max}</p>
								</FledTopAnimation>
							</div>
						</div>
					</div>

					<div className={css.ended}>
						<FledTopAnimation>
							<div className={css.infoTop}>EVENT ENDED</div>
						</FledTopAnimation>

						<div className={css.endedItems}>
							<div className={css.endedItem}>
								<FledTopAnimation>
									<p className={css.endedItemDesc}>{props.eventEnded.days}</p>
								</FledTopAnimation>
								<FledTopAnimation>
									<p className={css.endedItemTop}>DAYS</p>
								</FledTopAnimation>
							</div>
							<div className={css.endedItem}>
								<FledTopAnimation>
									<p className={css.endedItemDesc}>{props.eventEnded.hrs}</p>
								</FledTopAnimation>

								<FledTopAnimation>
									<p className={css.endedItemTop}>HRS</p>
								</FledTopAnimation>
							</div>
							<div className={css.endedItem}>
								<FledTopAnimation>
									<p className={css.endedItemDesc}>{props.eventEnded.min}</p>
								</FledTopAnimation>

								<FledTopAnimation>
									<p className={css.endedItemTop}>MIN</p>
								</FledTopAnimation>
							</div>
							<div className={css.endedItem1}>
								<FledTopAnimation>
									<p className={css.endedItemDesc}>{props.eventEnded.sec}</p>
								</FledTopAnimation>

								<FledTopAnimation>
									<p className={css.endedItemTop}>SEC</p>
								</FledTopAnimation>
							</div>
						</div>
					</div>
				</div>

				<div className={css.bottom}>
					<FledTopAnimation>
						<div className={css.progress}>
							<div className={css.progressInfo}>
								<p>100%</p>
								<p>(2,119 / 2,119)</p>
							</div>
							<div className={css.progressLine}>
								<span></span>
							</div>
						</div>
					</FledTopAnimation>
					<FledTopAnimation>
						<div className={css.socials}>
							{props.socials.map(item => {
								return (
									<a
										className={css.socialsLink}
										key={item.alt}
										href={item.link}
									>
										<img src={item.icon} alt={item.alt} />
									</a>
								)
							})}
						</div>
					</FledTopAnimation>
				</div>
			</div>
		</div>
	)
}

export default NftInfoCard
