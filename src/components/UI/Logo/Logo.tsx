import logo from '@/assets/images/logo.svg'
import styles from './Logo.module.css'
import { Link } from 'react-router-dom'

const Logo = () => {
	return (
		<Link className={styles.logo} to='/'>
			<img src={logo} alt='Logo' />
		</Link>
	)
}

export default Logo
