import { FC } from 'react'
import styles from './ConnectButton.module.css'

const ConnectButton: FC = ({ ...props }) => {
	return (
		<button {...props} className={styles.connectBtn}>
			CONNECT WALLET
		</button>
	)
}

export default ConnectButton
