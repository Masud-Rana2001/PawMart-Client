import React from 'react'
import HeroSection from './HeroSection'
import IndorPlantsSection from '../../components/IndorPlantsSection'
import PlantCareTips from '../../components/PlantCareTips'
import MeetOurExperts from '../../components/MeetOurExpert'
import EcoDecoridea from '../../components/EcoDecorIdea'
import PlantOfTheWeek from '../../components/PlantOfTheWeek'

import CategorySection from './CategorySection'
import RecentListing from './RecentListing'
import AdoptAwareness from './AdoptAwareness'
import PetHeroes from './PetHeros'

function HomePage() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <RecentListing />
      <AdoptAwareness />
      <PetHeroes/>
      
      {/* <PlantOfTheWeek/>
      <PlantCareTips />
      <MeetOurExperts />
      <EcoDecoridea/> */}
    </>
  )
}

export default HomePage