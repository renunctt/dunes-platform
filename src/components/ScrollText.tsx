import { useScrambleText } from '@/hooks/useScrambleText'
import { useEffect, useRef } from 'react'

const ScrollText = ({ text }: { text: string }) => {
	const [textRef, reload] = useScrambleText()
	const ref = useRef(null)

	useEffect(() => {
		const checkIfCentered = () => {
			const element = ref.current
			if (!element) return

			const elementRect = element.getBoundingClientRect()
			const viewportHeight =
				window.innerHeight || document.documentElement.clientHeight
			const centerY = viewportHeight / 2

			if (elementRect.top < centerY && elementRect.bottom > centerY) {
				reload()
				window.removeEventListener('scroll', checkIfCentered)
				window.removeEventListener('resize', checkIfCentered)
			}
		}

		window.addEventListener('scroll', checkIfCentered)
		window.addEventListener('resize', checkIfCentered)

		checkIfCentered()

		return () => {
			window.removeEventListener('scroll', checkIfCentered)
			window.removeEventListener('resize', checkIfCentered)
		}
	}, [])

	return (
		<div ref={ref}>
			<p ref={textRef}>{text}</p>
		</div>
	)
}

export default ScrollText
