import { useEffect, useRef } from 'react'
import { cardDetails } from '../../configs/carousel-config'

export const LinearRunner = () => {
  const logosRef = useRef(null)

  useEffect(() => {
    let ul = logosRef.current
    ul.insertAdjacentHTML('afterend', ul.outerHTML)
    ul.nextSibling.setAttribute('aria-hidden', 'true')
  }, [])

  return (
    <div>
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul
          ref={logosRef}
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {cardDetails.map((card) => (
            <li key={card.title}>
              <img
                style={{ filter: 'blur(4px)' }}
                src={card.imgUrl}
                alt={card.title}
              />
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true">
          {cardDetails.map((card) => (
            <li key={card.title}>
              <img
                style={{ filter: 'blur(4px)' }}
                src={card.imgUrl}
                alt={card.title}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
