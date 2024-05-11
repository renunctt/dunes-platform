import { useRef } from 'react'
import { Transition } from 'react-transition-group'
import MenuNav from './MenuNav'
import './HeaderMenu.css'

const HeaderMenu = ({ isOpen }: { isOpen: boolean }) => {
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
					<MenuNav />
				</nav>
			)}
		</Transition>
	)
}

export default HeaderMenu
