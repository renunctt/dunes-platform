import styles from './UpcomingItems.module.css'

import pondImg from '../../assets/images/upcoming/pond-img.png'
import pondIcon from '../../assets/images/upcoming/pond-icon.png'
import wsdmImg from '../../assets/images/upcoming/wsdm-img.png'
import wsdmIcon from '../../assets/images/upcoming/wsdm-icon.png'
import esxImg from '../../assets/images/upcoming/esx-img.png'
import esxIcon from '../../assets/images/upcoming/esx-icon.png'
import { UpcomingItem } from '../UpcomingItem/UpcomingItem'

const items = [
	{
		title: 'Pond  PNDC',
		img:  pondImg,
		icon: pondIcon,
		margin: '200px 0px -200px 0px'
	},
	{
		title: 'Wisdomis WSDM',
		img:  wsdmImg,
		icon: wsdmIcon,
		margin: '200px 0px -200px 0px'
	},
	{
		title: 'EstateX ESX',
		img:  esxImg,
		icon: esxIcon,
		margin: '200px 0px -200px 0px'
	},
]

export const UpcomingItems = () => {
	return (
		<div className={styles.items}>
			{items.map(item => {
				return <UpcomingItem {...item} key={item.title} />
			})}
		</div>
	)
}