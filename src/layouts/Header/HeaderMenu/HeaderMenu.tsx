import { FC, useRef } from 'react'
import { Transition } from 'react-transition-group'
import MenuNav from './MenuNav'
import './HeaderMenu.css'

interface HeaderMenuProps {
	isOpen: boolean
	close: () => void
}

const HeaderMenu: FC<HeaderMenuProps> = ({ isOpen, close }) => {
	const menuRef = useRef(null)

	return (
		<Transition
			in={isOpen}
			timeout={300}
			unmountOnExit={true}
			nodeRef={menuRef}
		>
			{state => (
				<nav className={`${state} header-nav`} ref={menuRef}>
					<MenuNav close={close} />
				</nav>
			)}
		</Transition>
	)
}

export default HeaderMenu
