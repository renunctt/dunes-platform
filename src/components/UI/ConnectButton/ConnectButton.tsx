import { FC, useEffect } from 'react'
import styles from './ConnectButton.module.css'
import { useTextScramble } from '@skits/react-text-scramble'

const ConnectButton: FC = ({ ...props }) => {
	const { state, reveal } = useTextScramble('ᚠᚢᚦᚨᚱ ᛉᛊᛏᛒᛚᛜ', {
    characters: 'CONNECT WALLET',
    speed: 50,
  });

	return (
		<button onMouseEnter={() => reveal(500, 0, 'typewriter', () => reveal(50, 0 , 'typewriter'))}  {...props} className={styles.connectBtn}>
			{state.output}
		</button>
	)
}

export default ConnectButton
