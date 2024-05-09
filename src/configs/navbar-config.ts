import swapIcon from '../assets/images/icons/dune-swap.svg'
import bridgeIcon from '../assets/images/icons/dune-bridge.svg'
import galleryIcon from '../assets/images/icons/dunes-gallery.svg'
import launchpadIcon from '../assets/images/icons/launchpad.svg'
import stakingIcon from '../assets/images/icons/staking.svg'

export interface IDropdownItems {
  text: string
  link: string
  icon: string
}

export const incubationItems: IDropdownItems[] = [
  { text: 'Dune Swap', link: '/swap', icon: swapIcon },
  { text: 'Dune Bridge', link: '/bridge', icon: bridgeIcon },
  { text: 'Dunes Gallery', link: '/gallery', icon: galleryIcon }
]

export const protocolItems: IDropdownItems[] = [
  { text: 'IDO Launchpad', link: '/ido-launchpad', icon: launchpadIcon },
  { text: 'INO Launchpad', link: '/ino-launchpad', icon: launchpadIcon },
  { text: 'Staking', link: '/staking', icon: stakingIcon }
]
