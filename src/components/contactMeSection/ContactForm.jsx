import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';


const ContactForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [succes, setSucces] = useState('');

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dw4t12m', 'template_oslbhgt', form.current, {
        publicKey: 'oxmJuF1GpO3s4ez6p',
      })
      .then(

        () => {
          setName('');
          setEmail('');
          setMessage('');
          setSucces('Mensaje Enviado.!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div>
      <p className='text-azulAs '> {succes} </p>
      <form className='flex flex-col gap-4 ' ref={form} onSubmit={sendEmail} >
        <input type='text' placeholder='Tu Nombre' required className=' h-12 rounded-lg bg-blackAs px-2 text-whiteAs ' name='from__name' value={name} onChange={handleName} />
        <input type="email" placeholder='Tu Email' required className=' h-12 rounded-lg bg-blackAs px-2 text-whiteAs' name='from_email' value={email} onChange={handleEmail} />
        <textarea type='text' placeholder='Mensaje' rows="9" cols="50" required  className=' rounded-lg bg-blackAs px-2 text-whiteAs' name='message' value={message} onChange={handleMessage} />
        <button type='submit' className=' w-full rounded-lg border border-azulAs text-whiteAs h-12 font-bold text-xl hover:bg-blackAs bg-azulAs transition-all duration-500' >Enviar</button>
      </form>
    </div>
  )
}

export default ContactForm