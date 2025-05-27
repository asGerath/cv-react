import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className=' flex flex-col gap-4 text-whiteAs '>
        <SingleInfo text="asgerath@gmail.com" Image={HiOutlineMail}  />
        <SingleInfo text="+52 55 1619 8657" Image={FiPhone}  />
        <SingleInfo text="Coyoacan, CDMX" Image={IoLocationOutline}  />
    </div>
  )
}

export default ContactInfo