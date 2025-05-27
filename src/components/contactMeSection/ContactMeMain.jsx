import React from 'react'
import ContactMeLeft from './ContactMeLeft'
import ContactMeRight from './ContactMeRight'

const ContactMeMain = () => {
  return (
    <div id='contact' className=' max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4 overflow-hidden ' >
        <h2 className=' text-6xl text-azulAs mb-10 text-center '>Contactame</h2>
        <div className=' flex justify-between gap-24 bg-black p-8 rounded-2xl lg:flex-row sm:flex-col  ' >
            <ContactMeLeft />
            <ContactMeRight />
        </div>
    </div>
  )
}

export default ContactMeMain