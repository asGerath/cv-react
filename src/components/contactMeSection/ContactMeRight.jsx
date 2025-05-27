import React from 'react'
import { EmailImg } from '../../assets'
import ContactInfo from './ContactInfo'
import ContactSocial from './ContactSocial'

const ContactMeRight = () => {
  return (
    <div className=' flex flex-col items-center justify-center gap-12 '>
        <img src={EmailImg} alt="imgEmail" className=' max-w-[300px] ' />
        <ContactInfo />
        <ContactSocial />
    </div>
  )
}

export default ContactMeRight