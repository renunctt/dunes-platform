import arrowIcon from '@/assets/images/icons/arrow-white.svg'
import styles from './NavBar.module.css'
import { DropdownMenu } from '../DropdownMenu/DropdownMenu'
import { useState } from 'react'
import { incubationItems, protocolItems } from '../../../configs/navbar-config'

interface DropdownVisibility {
  protocol: boolean
  incubation: boolean
}

export const NavBar = () => {
  const [dropdownVisibility, setDropdownVisibility] =
    useState<DropdownVisibility>({
      protocol: false,
      incubation: false
    })

  const handleMouseEnter = (dropdown: keyof DropdownVisibility) => {
    setDropdownVisibility((prevState) => ({
      ...prevState,
      [dropdown]: true
    }))
  }

  const handleMouseLeave = (dropdown: keyof DropdownVisibility) => {
    setDropdownVisibility((prevState) => ({
      ...prevState,
      [dropdown]: false
    }))
  }

  return (
    <>
      <nav className={styles.nav}>
        <div
          className={styles.menu}
          onMouseEnter={() => handleMouseEnter('incubation')}
          onMouseLeave={() => handleMouseLeave('incubation')}>
          <button className={styles.incubation}>
            Incubation
            <img src={arrowIcon} alt="" />
          </button>
          {dropdownVisibility.incubation && (
            <DropdownMenu items={incubationItems} />
          )}
        </div>

        <div
          className={styles.protocolMenu}
          onMouseEnter={() => handleMouseEnter('protocol')}
          onMouseLeave={() => handleMouseLeave('protocol')}>
          <button className={styles.protocol}>
            Protocol
            <img src={arrowIcon} alt="" />
          </button>
          {dropdownVisibility.protocol && (
            <DropdownMenu items={protocolItems} />
          )}
        </div>
      </nav>
    </>
  )
}
