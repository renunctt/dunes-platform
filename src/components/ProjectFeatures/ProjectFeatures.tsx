import { FledAnimation } from '../FledAnimation/FledAnimation'
import { FledTopAnimation } from '../FledTopAnimation/FledTopAnimation'
import styles from './ProjectFeatures.module.css'

export const ProjectFeatures = () => {
  return (
    <section className="my-container">
      <div className={styles.features}>
        <FledAnimation>
          <h2 className={styles.title}>KEY FEATURES</h2>
        </FledAnimation>

				<FledTopAnimation>

        <p className={styles.desc}>
          1. A playable immersive 5v5 MOBA experience designed to rival
          traditional, top-tier mobile titles.
        </p>
				</FledTopAnimation>
				<FledTopAnimation>

        <p>
          2. Backed by key players including Immutable, Seedify (our incubator),
          Merit Circle and many more!{' '}
        </p>
				</FledTopAnimation>

      </div>
    </section>
  )
}
