import NftInfoCard from '@/components/NftInfo/NftInfoCard/NftInfoCard'
import NftInfoTop from '@/components/NftInfo/NftInfoTop/NftInfoTop'
import { seiPandasCard, seiPandasTop } from '@/constants/nftConstants'
import { useEffect } from 'react'

const NftInfo = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<NftInfoTop {...seiPandasTop} />
			<NftInfoCard {...seiPandasCard} />
		</>
	)
}

export default NftInfo