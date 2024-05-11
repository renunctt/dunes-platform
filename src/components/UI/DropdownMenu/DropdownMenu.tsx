import { FC } from 'react'
import './DropdownMenu.css'
import { DropdownMenuProps } from '.'
import DropdownLink from './DropdownLink'

export const DropdownMenu: FC<DropdownMenuProps> = ({ links }) => {
  return (
    <ul className='dropdown-menu'>
      {links.map(link =>  <DropdownLink link={link} key={link.text} />)}
    </ul>
  )
}
