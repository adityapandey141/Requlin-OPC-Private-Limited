import React from 'react'
import ServicesHeader from '@/componets/ServicesHeader'
import ServiceSection from '@/componets/ServiceSection'
import FAQ from '@/componets/FAQ'
import TechSections from '@/componets/TechSections'
import CTASection2 from '@/componets/CTASection2'

const page = () => {
  return (
    <div>
        <ServicesHeader/>
        <ServiceSection/>
        <FAQ/>
        <TechSections/>
        <CTASection2/>
    </div>
  )
}

export default page