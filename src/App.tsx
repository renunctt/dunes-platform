import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './layouts/Header/Header'
import { Footer } from './layouts/Footer/Footer'

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

document.addEventListener('DOMContentLoaded', function () {
  var shuffleElements = document.querySelectorAll('.shuffle-hover-inside')

  shuffleElements.forEach(function (shuffleElement) {
    if (shuffleElement) {
      shuffleElement.setAttribute('data-text', shuffleElement.textContent || '')
    }
  })

  let animationTimeout: number
  const letterRegex = /[a-zA-Zа-яА-Я]/
  const runes = [
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
    'ᛜ'
  ]

  let isAnimating = false
  let previousElement: Element | null = null

  function shuffleToRunesAndBack(element: Element, originalText: string) {
    const copyText = originalText
    let elementTextArray =
      copyText.length <= 10
        ? copyText.split('')
        : copyText.slice(0, 10).split('')
    let isTextToRunes = true

    function shuffleStep() {
      let availableIndexes: number[] = []
      elementTextArray.forEach(function (char, index) {
        if (
          (isTextToRunes && letterRegex.test(char)) ||
          (!isTextToRunes && runes.includes(char))
        ) {
          availableIndexes.push(index)
        }
      })
      if (availableIndexes.length > 0) {
        let randomIndex =
          availableIndexes[Math.floor(Math.random() * availableIndexes.length)]
        elementTextArray[randomIndex] = isTextToRunes
          ? runes[Math.floor(Math.random() * runes.length)]
          : originalText[randomIndex]
        element.textContent = elementTextArray.join('')
        animationTimeout = setTimeout(shuffleStep, 15)
      } else {
        if (isTextToRunes) {
          isTextToRunes = false
          shuffleStep()
        } else {
          clearTimeout(animationTimeout)
          element.textContent = originalText
          isAnimating = false
        }
      }
    }
    shuffleStep()
  }

  shuffleElements.forEach(function (shuffleElement) {
    shuffleElement.addEventListener('mouseenter', function () {
      let element = shuffleElement
      let originalText = element.getAttribute('data-text')
      if (isAnimating) {
        clearTimeout(animationTimeout)
        if (previousElement) {
          previousElement.textContent =
            previousElement.getAttribute('data-text')
          isAnimating = false
        }
      }
      shuffleToRunesAndBack(element, originalText || '')
      isAnimating = true
      previousElement = element
    })
  })
})
