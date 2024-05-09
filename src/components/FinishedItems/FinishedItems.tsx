import styles from './FinishedItems.module.css'
import cataImg from '../../assets/images/finished/cata-img.png'
import cataIcon from '../../assets/images/finished/cata-icon.png'
import eseImg from '../../assets/images/finished/ese-img.png'
import eseIcon from '../../assets/images/finished/ese-icon.png'
import nextImg from '../../assets/images/finished/next-img.png'
import nextIcon from '../../assets/images/finished/next-icon.png'

import twitterIcon from '../../assets/images/card/twitter.svg'
import wwwIcon from '../../assets/images/card/www.svg'
import telegramIcon from '../../assets/images/card/telegram.svg'
import discordIcon from '../../assets/images/card/discord.svg'
import { FinishedItem, FinishedItemProps } from '../FinishedItem/FinishedItem'

const items: FinishedItemProps[] = [
  {
    title: 'Catamoto CATA',
    img: cataImg,
    icon: cataIcon,
    price: '225, 000',
    roi: 25,
    socials: [
      { icon: twitterIcon, link: 'https://twitter.com', alt: 'twitter' },
      { icon: wwwIcon, link: 'https://google.com', alt: 'web site' },
      { icon: telegramIcon, link: 'https://telegram.com', alt: 'telegram' }
    ],
		margin: '100px 0px -100px 0px'
  },
  {
    title: 'Eesee ESE',
    img: eseImg,
    icon: eseIcon,
    price: '500, 000',
    roi: 8,
    socials: [
      { icon: twitterIcon, link: 'https://twitter.com', alt: 'twitter' },
      { icon: telegramIcon, link: 'https://telegram.com', alt: 'telegram' }
    ],
		margin: '150px 0px -150px 0px'
  },
  {
    title: 'Next Gem AI',
    img: nextImg,
    icon: nextIcon,
    price: '90, 000',
    roi: 2,
    socials: [
      { icon: twitterIcon, link: 'https://twitter.com', alt: 'twitter' },
      { icon: wwwIcon, link: 'https://google.com', alt: 'web site' },
      { icon: discordIcon, link: 'https://discord.com', alt: 'discord' },
      { icon: telegramIcon, link: 'https://telegram.com', alt: 'telegram' }
    ],
		margin: '200px 0px -200px 0px'
  }
]

export const FinishedItems = () => {
  return (
    <div className={styles.items}>
      {items.map((item) => {
        return <FinishedItem {...item} key={item.title} />
      })}
    </div>
  )
}
