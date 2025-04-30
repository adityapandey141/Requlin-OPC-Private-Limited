import React from 'react'
import ContactHeader from '@/componets/contact/ContactHeader'
import ContactForm from '@/componets/contact/ContactForm'
import ContactMap from '@/componets/contact/ContactMap'

const page = () => {
  return (
    <div>
      <ContactHeader/>
      <ContactForm/>
      <ContactMap/>
    </div>
  )
}

export default page
