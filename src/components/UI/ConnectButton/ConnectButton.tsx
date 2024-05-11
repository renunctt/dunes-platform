import { FC } from 'react'
import styles from './ConnectButton.module.css'

const ConnectButton: FC = ({ ...props }) => {
	return (
		<button {...props} className={styles.connectBtn}>
			Connect wallet
		</button>
	)
}

export default ConnectButton
