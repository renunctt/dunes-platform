type socialLink = { icon: string; link: string; alt: string }

interface NftInfoTopProps {
	name: string
	description: string
}

interface NftInfoCardProps {
	nftImage: string
	nftFullTitle: string
	desc: string
	total: number
	minted: number
	reserved: number
	data: string
	publicMint: {
		price: number
		items: number
		max: number
	}
	eventEnded: {
		days: number
		hrs: number
		min: number
		sec: number
	}
	socials: socialLink[]
}