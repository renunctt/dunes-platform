import React, { useCallback, useRef } from 'react'

type RefType = React.MutableRefObject<any>

const letterRegex = /[a-zA-Zа-яА-Я]/
const RUNES = [
	'ᚠ',
	'ᚢ',
	'ᚦ',
	'ᚨ',
	'ᚱ',
	'ᚲ',
	'ᚹ',
	'ᚾ',
	'ᛁ',
	'ᛃ',
	'ᛇ',
	'ᛈ',
	'ᛉ',
	'ᛊ',
	'ᛏ',
	'ᛒ',
	'ᛚ',
	'ᛜ',
]

export const useScrambleText = (): readonly [RefType, () => void] => {
	const ref = useRef(null)
	let animationTimeout
	let isAnimating = false
	let previousElement: Element | null = null

	const reload = useCallback(() => {
		if (isAnimating) {
			return
		}
		const content = ref.current?.textContent
		if (isAnimating) {
			clearTimeout(animationTimeout)
			if (previousElement) {
				isAnimating = false
			}
		}
		scrambleToRunesAndBack(content)
		isAnimating = true
		previousElement = ref.current
	}, [ref])

	const scrambleToRunesAndBack = (text: string) => {
		const textArray = text.split('')
		let isRunes = true

		const step = () => {
			let availableIndexes: number[] = []

			textArray.forEach((char, index) => {
				const isTextAndMatchesRegex = isRunes && letterRegex.test(char)
				const isRunesAndIncludesRunes = !isRunes && RUNES.includes(char)

				if (isTextAndMatchesRegex || isRunesAndIncludesRunes) {
					availableIndexes.push(index)
				}
			})

			if (availableIndexes.length > 0) {
				const rand =
					availableIndexes[Math.floor(Math.random() * availableIndexes.length)]

				textArray[rand] = isRunes
					? RUNES[Math.floor(Math.random() * RUNES.length)]
					: text.split('')[rand]

				ref.current.textContent = textArray.join('')
				animationTimeout = setTimeout(step, 15)
			} else {
				if (isRunes) {
					isRunes = false
					step()
				} else {
					clearTimeout(animationTimeout)
					ref.current.textContent = text
					isAnimating = false
				}
			}
		}

		step()
	}

	return [ref, reload] as const
}
