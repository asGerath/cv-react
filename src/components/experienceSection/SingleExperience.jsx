import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

const SingleExperience = ( {experience} ) => {
  return (
    <motion.div 
      variants={fadeIn("right", 0.2)}
      initial='hidden'  
      whileInView="show"
      viewport={ { once: false, amount: 0 } }
      className=' md:h-auto md:w-[240px] sm:h-auto sm:w-full border-2 border-azulAs border-dashed rounded-2xl p-4 '>
        <p className=' font-bold text-whiteAs '> {experience.job} </p>
        <a target='_blank' href={experience.url} className=' text-azulAs '> {experience.company} </a>
        <p className=' text-greyMedium '> {experience.date} </p>
        
    </motion.div>
  )
}

export default SingleExperience