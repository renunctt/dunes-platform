import { FC, ReactNode } from 'react'
import css from './FormButton.module.css'

interface FormButtonProps {
	children: ReactNode
}

const FormButton: FC<FormButtonProps> = ({ children, ...props }) => {
	return (
		<button className={css.formBtn} {...props}>
			{children}
		</button>
	)
}

export default FormButton
