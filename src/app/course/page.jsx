import React from 'react'
import CoursesHeader from '@/componets/CoursesHeader'
import ServiceSection from '@/componets/ServiceSection'
import FAQ from '@/componets/FAQ'
import TechSections from '@/componets/TechSections'
import CTASection2 from '@/componets/CTASection2'

const page = () => {
  return (
    <div>
        <CoursesHeader/>
        <ServiceSection/>
        <FAQ/>
        <TechSections/>
        <CTASection2/>
    </div>
  )
}

export default page