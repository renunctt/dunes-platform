import styles from './TeamCards.module.css'

import cardImg1 from '@/assets/images/team/team-1.png'
import cardImg2 from '@/assets/images/team/team-2.png'
import cardImg3 from '@/assets/images/team/team-3.png'
import cardImg4 from '@/assets/images/team/team-4.png'
import { TeamCard } from '../TeamCard/TeamCard'

const teams = [
  { img: cardImg1, name: 'Amid Yazidi', margin: '150px 0px -150px 0px' },
  { img: cardImg2, name: 'Amid Yazidi', margin: '200px 0px -200px 0px' },
  { img: cardImg3, name: 'Amid Yazidi', margin: '250px 0px -250px 0px' },
  { img: cardImg4, name: 'Amid Yazidi', margin: '300px 0px -300px 0px' }
]

export const TeamCards = () => {
  return (
    <div className={styles.teams}>
      {teams.map((team) => {
        return <TeamCard {...team} key={team.img} />
      })}
    </div>
  )
}
