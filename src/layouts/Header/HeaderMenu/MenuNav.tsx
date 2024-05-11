import ConnectButton from '@/components/UI/ConnectButton/ConnectButton'
import { DropdownMenu } from '@/components/UI/DropdownMenu/DropdownMenu'
import { navIncubationLinks, navProtocolLinks } from '..'

const MenuNav = () => {
	return (
		<nav>
			<p>Incubation</p>
			<DropdownMenu links={navIncubationLinks} />

			<p>Protocol</p>
			<DropdownMenu links={navProtocolLinks} />

			<div className='w-full flex justify-center mt-5'>
				<ConnectButton />
			</div>
		</nav>
	)
}

export default MenuNav
