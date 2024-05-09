import { FledAnimation } from '../FledAnimation/FledAnimation'
import { FledTopAnimation } from '../FledTopAnimation/FledTopAnimation'
import styles from './ProjectOverview.module.css'


export const ProjectOverview = () => {
  return (
    <section className={styles.overview}>
      <div className="my-container">
        <div className={styles.overviewWrapper}>
          <FledAnimation>
            <h2 className={styles.title}>Project OVERVIEW</h2>
          </FledAnimation>

          <FledTopAnimation>
            <p>
              Evermoon: A Next-Gen 5v5 MOBA with Web3 Innovation. Dive into
              intense battles, strategic gameplay, and earn rewards. Experience
              dynamic 5v5 action, seasonal NFTs, and community tournaments in
              the DeFi E-Sports arena. Market Dominance: Consistently ranked #1
              in Web3 MOBAs, with explosive early adoption and a passionate
              global community. Top-Tier Gameplay: A playable immersive 5v5 MOBA
              experience designed to rival traditional, top-tier mobile titles.
            </p>
          </FledTopAnimation>
          <FledTopAnimation>
            <p>
              Economic Empowerment: Players genuinely own their in-game assets,
              driving value through our dynamic NFT marketplace and
              Free-to-Play-and-Earn model. Industry Support: Backed by key
              players including Immutable, Seedify (our incubator), Merit Circle
              and many more! Mainstream Appeal: Designed for both traditional
              gamers and Web3 enthusiasts, bridging the gap for mass adoption.
              Built for Scale: Token bridging on BNB and Immutable-powered NFTs
              ensure low-cost, seamless transactions for a mainstream-ready
              experience.
            </p>
          </FledTopAnimation>
        </div>
      </div>
    </section>
  )
}
