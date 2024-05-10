import { Main } from '../components/MainSection/Main.tsx'
//import { Trusted } from '../components/TrustedSection/Trusted.tsx'
import { Featured } from '../components/FeaturedSection/Featured.tsx'
import { LaunchpadSection } from '../components/LaunchpadSection/LaunchpadSection.tsx'
import { ApplySection } from '../components/ApplySection/ApplySection.tsx'
import { FinishedItems } from '../components/FinishedItems/FinishedItems.tsx'
import { finishedItem, upcomingItems } from '../constants/LounchpadConstants.tsx'
import { UpcomingItems } from '../components/UpcomingItems/UpcomingItems.tsx'

export const Home = () => {
  return (
    <>
      <Main />
      {/* <Trusted /> */}
      <Featured />
      <LaunchpadSection title='IDOs'  firstItems={<FinishedItems items={finishedItem} />} secondItems={<UpcomingItems items={upcomingItems} />} />
      <ApplySection />
    </>
  )
}
