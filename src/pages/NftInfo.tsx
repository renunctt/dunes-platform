import NftInfoCard from '@/components/NftInfo/NftInfoCard/NftInfoCard'
import NftInfoTop from '@/components/NftInfo/NftInfoTop/NftInfoTop'
import { seiPandasCard, seiPandasTop } from '@/constants/nftConstants'

const NftInfo = () => {
	return (
		<>
			<NftInfoTop {...seiPandasTop} />
			<NftInfoCard {...seiPandasCard} />
		</>
	)
}

export default NftInfo