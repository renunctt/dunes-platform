import { FC, useEffect } from 'react'
import { ProjectTimeline } from '../components/ProjectTimeline/ProjectTimeline'
import { ProjectDetails } from '../components/ProjectDetails/ProjectDetails'
import { ProjectPrices } from '../components/ProjectPrices/ProjectPrices'
import { ProjectOverview } from '../components/ProjectOverview/ProjectOverview'
import { ProjectFeatures } from '../components/ProjectFeatures/ProjectFeatures'
import { ProjectTeam } from '../components/ProjectTeam/ProjectTeam'
import { ProjectPartners } from '../components/ProjectPartners/ProjectPartners'
import { ProjectToken } from '../components/ProjectToken/ProjectToken'

// export interface ProjectInfoProps {
//   project: {
//     title: string
//     icon: string
//   }
// }

export const ProjectInfo: FC = ()=> {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ProjectTimeline />
      <ProjectDetails />
      <ProjectPrices />
      <ProjectOverview />
      <ProjectFeatures />
      <ProjectTeam />
      <ProjectPartners />
      <ProjectToken />
    </>
  )
}
