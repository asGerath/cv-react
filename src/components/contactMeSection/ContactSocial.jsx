import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const ContactSocial  = () => {
  return (
    <div className=' flex gap-4 '>
      <SingleContactSocial link="https://www.linkedin.com/in/joshua-abarca/" Icon={FaLinkedinIn} />
      {/* <SingleContactSocial link="#" Icon={FiGithub} /> */}
      <SingleContactSocial link="https://wa.link/v484dj" Icon={FaWhatsapp} />
    </div>
  )
}

export default ContactSocial