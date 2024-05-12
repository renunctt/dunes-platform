import { getImageUrl } from '@/helpers'
import { useState } from 'react'
import Logo from '@/components/UI/Logo/Logo'
import NavBar from '@/components/UI/NavBar/NavBar'
import css from './Header.module.css'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import ConnectButton from '@/components/UI/ConnectButton/ConnectButton'

const Header = () => {
	const [isOpen, setOpen] = useState(false)

	const handleMenuBtn = () => {
		setOpen(!isOpen)
	}

	return (
		<>
			<header className={css.header}>
				<div className={css.container}>
					<Logo />
					<NavBar />

					<div className={`${css.connect} flex-center`}>
						<ConnectButton />
					</div>

					<button className={css.menuBtn} onClick={handleMenuBtn}>
						<img src={getImageUrl('menu-icon', 'nav')} alt='' />
					</button>

					<HeaderMenu isOpen={isOpen} close={() => setOpen(false)} />
				</div>
			</header>
			<div className={css.gap}></div>
		</>
	)
}

export default Header
