import React from 'react'
import Hero from '../../components/Hero'
import CategoryWrapper from '../category/CategoryWrapper'
import FeaturedSelection from './FeaturedSelection'
import LatestReciepe from './LatestReciepe'
import NewsLetter from './NewsLetter'
import AboutSection from './AboutSection'
import CompanyLogo from './CompanyLogo'
import Subscription from './Subscription'
const Homes = () => {
  return (
    <div className='container mx-auto'>
        <div className='flex flex-col justify-center items-center w-full py-20'><Hero/>
        <CategoryWrapper/>
        </div>
        <FeaturedSelection/>
        <LatestReciepe/>
        <NewsLetter/>
        <AboutSection/>
        <CompanyLogo/>
        <Subscription/>
        </div>
  )
}

export default Homes