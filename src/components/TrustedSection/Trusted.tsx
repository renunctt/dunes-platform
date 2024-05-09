import styles from './Trusted.module.css'
import arrowIcon from '@/assets/images/icons/arrow-green.svg'
import { useEffect, useRef } from 'react';
import bitcoinIcon from '@/assets/images/icons/bitcoin.svg'
import { cardDetails } from '../../configs/carousel-config'

export const Trusted = () => {
  
  const logosRef = useRef(null);
  
  useEffect(() => {
    let ul = logosRef.current;
    if (!ul) {
      return
    }
    ul.insertAdjacentHTML('afterend', ul.outerHTML);
    ul.nextSibling.setAttribute('aria-hidden', 'true');
  }, []);
  
  return (
    <section className={styles.trusted}>
      <div className={`${styles.trustedWrapper}`}>
        <div className={styles.content}>
          <h3 className={styles.title}>
            Trusted by
            <img src={arrowIcon} alt=""/>
          </h3>
          
          <div className={styles.carusel}>
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
              <ul ref={logosRef} className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {cardDetails.map((card) => (
                  <li key={card.title}>
                    <img className={styles.caruselImg} src={card.imgUrl} alt={card.title}/>
                  </li>
                ))}
              </ul>
              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                {cardDetails.map((card) => (
                  <li key={card.title}>
                    <img className={styles.caruselImg} src={card.imgUrl} alt={card.title}/>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          
        </div>
        
        <div className={styles.decor}>

          <div className={styles.circle}>
            
          </div>
          <img className={styles.bitcoin} src={bitcoinIcon} alt=""/>

        </div>
      </div>

    </section>
  )
}