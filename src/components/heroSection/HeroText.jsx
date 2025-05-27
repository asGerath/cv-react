import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'
import HeroBtn from './HeroBtn'
import NavbarBtn from '../navbar/NavbarBtn'

function HeroText() {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left sm:text-center'>
        <motion.h2 
          variants={fadeIn("down", 0.2)}
          initial='hidden'  
          whileInView="show"
          viewport={ { once: false, amount: 0 } }
          className='lg:text-2xl sm:text-xl font-especial uppercase text-greyMedium'>
            Front-End Web Developer
        </motion.h2>
        <motion.h1
          variants={fadeIn("right", 0.4)}
          initial='hidden'  
          whileInView="show"
          viewport={ { once: false, amount: 0 } }
          className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-sans text-azulAs'>
            Joshua Gerath
        </motion.h1>
        <motion.p 
          variants={fadeIn("left", 0.6)}
          initial='hidden'  
          whileInView="show"
          viewport={ { once: false, amount: 0 } }
          className='text-lg mt-4 text-whiteAs'>
            Desarrollador web apasionado con 3 años de experiencia<br />transformando ideas en productos funcionales.
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial='hidden'  
          whileInView="show"
          viewport={ { once: false, amount: 0 } }
          >
            <NavbarBtn />
        </motion.div>
    </div>
  )
}

export default HeroText