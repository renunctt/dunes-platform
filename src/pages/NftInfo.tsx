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
			<div className='flex flex-col items-center justify-center'>
				<NftInfoTop {...seiPandasTop} />
				<NftInfoCard {...seiPandasCard} />
			</div>
		</>
	)
}

export default NftInfo
