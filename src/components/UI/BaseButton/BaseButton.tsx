import { FC, ReactNode } from 'react'
import css from './BaseButton.module.css'

interface BaseButtonProps {
	children: ReactNode
}

const BaseButton: FC<BaseButtonProps> = ({ children, ...props }) => {
	return (
		<button {...props} className={css.baseBtn}>
			{children}
		</button>
	)
}

export default BaseButton
