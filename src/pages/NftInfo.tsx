import NftInfoCard from '@/components/NftInfo/NftInfoCard/NftInfoCard'
import NftInfoTop from '@/components/NftInfo/NftInfoTop/NftInfoTop'
import { seiPandasCard, seiPandasTop } from '@/constants/nftConstants'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const NftInfo = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	const param = useParams();
	

	return (
		<>
			<div className='flex flex-col items-center justify-center'>
				<NftInfoTop title={param.id} {...seiPandasTop}  />
				<NftInfoCard {...seiPandasCard} />
			</div>
		</>
	)
}

export default NftInfo
