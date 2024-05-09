import { ButtonHTMLAttributes, FC } from 'react'
import styles from './DropdownMenu.module.css'
import { IDropdownItems } from '../../../configs/navbar-config'
import { Link } from 'react-router-dom'

interface DropdownMenu extends ButtonHTMLAttributes<HTMLButtonElement> {
  items: IDropdownItems[]
}

export const DropdownMenu: FC<DropdownMenu> = ({ items }) => {
  return (
    <div className={styles.menu}>
      {items.map((item) => {
        return (
          <Link to={item.link} key={item.text}>
            <div className={styles.link}>
              <img src={item.icon} alt="" />
              <p className="shuffle-hover-inside">{item.text}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
