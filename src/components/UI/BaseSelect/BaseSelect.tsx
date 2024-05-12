import { useState } from 'react'
import css from './BaseSelect.module.css'

const BaseSelect = ({ options, onChange }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState(options[0])

	const toggleOptions = () => {
		setIsOpen(!isOpen)
	}

	const handleOptionClick = option => {
		setSelectedOption(option)
		setIsOpen(false)
		onChange(option)
	}

	return (
		<div className={css.customSelect}>
			<div className={css.selectedOption} onClick={toggleOptions}>
				{selectedOption.abbr}
			</div>
			{isOpen && (
				<div className={css.optionsList}>
					{options.map(option => (
						<div
							key={option.abbr}
							onClick={() => handleOptionClick(option)}
							className={css.item}
						>
							{option.abbr}
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default BaseSelect
