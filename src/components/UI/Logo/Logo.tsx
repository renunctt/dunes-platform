import logo from '@/assets/images/logo.svg'
import styles from './Logo.module.css'
import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <Link className={styles.logo} to="/dunes-platform">
      <img src={logo} alt="Logo" />
    </Link>
  )
}
