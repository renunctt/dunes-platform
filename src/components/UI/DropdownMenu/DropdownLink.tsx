import { FC } from 'react'
import { DropdownLinkProps } from '.'
import { Link } from 'react-router-dom'
import { getImageUrl } from '@/helpers'
import './DropdownMenu.css'
import { useScrambleText } from '@/hooks/useScrambleText'

const DropdownLink: FC<DropdownLinkProps> = ({ link, close }) => {
	const [ref, reload] = useScrambleText()

	return (
		<li onMouseEnter={reload} className='dropdown-list'>
			<Link to={link.link} key={link.text} onClick={close}>
				<img src={getImageUrl(link.icon, 'nav')} alt='' />
				<p ref={ref}>{link.text}</p>
			</Link>
		</li>
	)
}

export default DropdownLink
