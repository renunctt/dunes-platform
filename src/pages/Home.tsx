import { Main } from '../components/MainSection/Main.tsx'
//import { Trusted } from '../components/TrustedSection/Trusted.tsx'
import { Featured } from '../components/FeaturedSection/Featured.tsx'
import { LaunchpadSection } from '../components/LaunchpadSection/LaunchpadSection.tsx'
import { ApplySection } from '../components/ApplySection/ApplySection.tsx'

export const Home = () => {
  return (
    <>
      <Main />
      {/* <Trusted /> */}
      <Featured />
      <LaunchpadSection />
      <ApplySection />
    </>
  )
}
