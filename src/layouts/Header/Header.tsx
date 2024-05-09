import { useRef } from 'react'
import styles from './Header.module.css'
import { Logo } from '../../components/UI/Logo/Logo'
import { BaseButton } from '../../components/UI/buttons/BaseButton/BaseButton'
import { NavBar } from '../../components/UI/NavBar/NavBar'
import menuIcon from '@/assets/images/icons/menu-icon.svg'
import { Transition } from 'react-transition-group'
import { useState } from 'react'
import { DropdownMenu } from '../../components/UI/DropdownMenu/DropdownMenu'
import { incubationItems, protocolItems } from '../../configs/navbar-config'

export const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const navRef = useRef(null)

  return (
    <>
      <header className={`${styles.header} flex-center`}>
        <div className={`${styles.headerWrapper} my-container flex-bw`}>
          <Logo />
          <NavBar />
          <div className={`${styles.connect} flex-center`}>
            <BaseButton>Connect wallet</BaseButton>
          </div>
          <button className={styles.menuBtn} onClick={() => setOpen(!isOpen)}>
            <img src={menuIcon} alt="" />
          </button>

          <Transition
            in={isOpen}
            timeout={300}
            unmountOnExit={true}
            nodeRef={navRef}>
            {(state) => (
              <nav
                ref={navRef}
                className={`${styles.mobileNav} ${state}`}>
                <p>Incubation</p>
                <DropdownMenu items={incubationItems} />

                <p>Protocol</p>
                <DropdownMenu items={protocolItems} />
                <div className={styles.mobileConnect}>
                  <BaseButton>Connect wallet</BaseButton>
                </div>
                
              </nav>
            )}
          </Transition>
        </div>
      </header>
      <div className={styles.gap}></div>
    </>
  )
}
