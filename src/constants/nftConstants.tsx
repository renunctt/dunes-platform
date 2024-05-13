import twitterIcon from '@/assets/images/card/twitter.svg'
import wwwIcon from '@/assets/images/card/www.svg'
import discordIcon from '@/assets/images/card/discord.svg'
import telegramIcon from '@/assets/images/card/telegram.svg'

import nftImage from '@/assets/images/nft/sei-pandas.png'

export const seiPandasTop: NftInfoTopProps = {
	name: 'Sei Pandas',
	description:
		'The Sei Pandas Collection on blockchain is a set of digital assets dedicated to one of the most amazing animals on the planet, the pandas!'
}

export const seiPandasCard: NftInfoCardProps = {
	nftImage,
	nftFullTitle: 'Sei Pandas #700',
	desc: 'The Sei Pandas Collection on blockchain is a set of digital assets dedicated to one of the most amazing animals on the planet, the pandas!',
	total: 2222,
	minted: 2222,
	reserved: 6,
	data: '2023-08-25 13:00:00 UTC',
	publicMint: {
		price: 0,
		items: 2119,
		max: 5,
	},
	eventEnded: {
		days: 0,
		hrs: 0,
		min: 0,
		sec: 0,
	},
	socials: [
		{ icon: twitterIcon, link: 'https://twitter.com', alt: 'twitter' },
		{ icon: wwwIcon, link: 'https://google.com', alt: 'www' },
		{ icon: discordIcon, link: 'https://discord.com', alt: 'discord' },
		{ icon: telegramIcon, link: 'https://telegram.org', alt: 'telegram' },
	],
}
