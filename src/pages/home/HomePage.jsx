import React from 'react'
import HeroSection from './HeroSection'


import MeetOurExperts from '../../components/MeetOurExpert'


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
      
    </>
  )
}

export default HomePage