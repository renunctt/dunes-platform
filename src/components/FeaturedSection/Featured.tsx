import styles from './Featured.module.css'
import featuredIcon from '@/assets/images/icons/featured-arrow.svg'
import { CardItem } from '../CardItem/CardItem.tsx'
import { FledAnimation } from '../FledAnimation/FledAnimation.tsx'

export const Featured = () => {
  return (
    <section className={styles.featured}>
      <div className="my-container">
        <div className={styles.top}>
          <h2 className={styles.title}>
            <img className={styles.left} src={featuredIcon} alt="" />
            <FledAnimation>
              <span>Featured Launch</span>
            </FledAnimation>
            <img className={styles.right} src={featuredIcon} alt="" />
          </h2>
        </div>

          <CardItem />
      </div>
    </section>
  )
}
