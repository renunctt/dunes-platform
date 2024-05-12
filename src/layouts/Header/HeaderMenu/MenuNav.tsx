import ConnectButton from '@/components/UI/ConnectButton/ConnectButton'
import { DropdownMenu } from '@/components/UI/DropdownMenu/DropdownMenu'
import { navIncubationLinks, navProtocolLinks } from '..'
import { FC } from 'react'
import Logo from '@/components/UI/Logo/Logo'

interface MenuNavProps {
	close: () => void
}

const MenuNav: FC<MenuNavProps> = ({ close }) => {
	return (
		<nav>
			<div className='mt-5 ml-5' onClick={close}>
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
