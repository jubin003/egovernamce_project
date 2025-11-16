
import React from 'react'

// hero section
import HeroSection from '../components/common/HeroSection'
import Subscription from '../components/common/Subscription'
import UpdateSection from '../components/common/UpdateSection'
import AlertSection from '../components/common/AlertSection'
function Home() {
  return (
    <div>
      <AlertSection/>
      <HeroSection/>
      <UpdateSection/>
      <Subscription/>
    </div>
  )
}

export default Home
