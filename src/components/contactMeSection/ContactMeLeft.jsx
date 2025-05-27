import React from 'react'
import ContactForm from './ContactForm'

const ContactMeLeft = () => {
  return (
    <div className=' flex flex-col gap-8 w-full ' >
        <div>
            <h2 className=' text-azulAs text-3xl mb-4 '>Póngase en contacto</h2>
            <p className=' text-whiteAs '>
               ¿Hablamos? Llena el formulario y te responderé pronto.
            </p>
        </div>
        <ContactForm />
    </div>
  )
}

export default ContactMeLeft