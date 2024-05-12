import { FC } from 'react'
import styles from './ConnectButton.module.css'
import { useScrambleText } from '@/hooks/useScrambleText'

const ConnectButton: FC = ({ ...props }) => {
	const [ref, reload] = useScrambleText()

	return (
		<button
			onMouseEnter={reload}
			onMouseLeave={reload}
			ref={ref}
			{...props}
			className={styles.connectBtn}
		>
			CONNECT WALLET
		</button>
	)
}

export default ConnectButton
