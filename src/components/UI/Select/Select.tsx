import { useState } from 'react'
import styles from './Select.module.css'

function Select({ options, selectedOption, onChange }) {
	const [isOpen, setIsOpen] = useState(false)

	const handleOptionClick = value => {
		setIsOpen(false)
		onChange(value)
	}

	return (
		<div className={styles.customSelect}>
			<div className={styles.selectedOption} onClick={() => setIsOpen(!isOpen)}>
				{selectedOption}
			</div>
			{isOpen && (
				<div className={styles.options}>
					{options.map(option => (
						<div
							key={option.value}
							className={styles.option}
							onClick={() => handleOptionClick(option.value)}
						>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default Select
