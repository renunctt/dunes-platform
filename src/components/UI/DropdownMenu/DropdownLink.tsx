import { FC } from 'react'
import { DropdownLinkProps } from '.'
import { Link } from 'react-router-dom'
import { getImageUrl } from '@/helpers'
import './DropdownMenu.css'

const DropdownLink: FC<DropdownLinkProps> = ({ link }) => {
	return (
		<li className='dropdown-list'>
			<Link to={link.link} key={link.text}>
				<img src={getImageUrl(link.icon)} alt='' />
				{link.text}
			</Link>
		</li>
	)
}

export default DropdownLink
