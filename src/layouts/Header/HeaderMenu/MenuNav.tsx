import ConnectButton from '@/components/UI/ConnectButton/ConnectButton'
import { DropdownMenu } from '@/components/UI/DropdownMenu/DropdownMenu'
import { navIncubationLinks, navProtocolLinks } from '..'
import { FC } from 'react'
import Logo from '@/components/UI/Logo/Logo'
import './HeaderMenu.css'

interface MenuNavProps {
	close: () => void
}

const MenuNav: FC<MenuNavProps> = ({ close }) => {
	return (
		<nav>
			<div className='menu-nav-logo' onClick={close}>
			<Logo />
			</div>
			<p>Incubation</p>
			<DropdownMenu close={close} links={navIncubationLinks} />

			<p>Protocol</p>
			<DropdownMenu close={close} links={navProtocolLinks} />

			<div className='w-full flex justify-center mt-5'>
				<ConnectButton />
			</div>
		</nav>
	)
}

export default MenuNav
