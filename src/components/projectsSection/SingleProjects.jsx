import React from 'react'
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

const SingleProjects = ( { name, year, align, image, link } ) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial='hidden'  
      whileInView="show"
      viewport={ { once: false, amount: 0 } }
      >      
        <div className={` flex w-full sm:flex-col-reverse items-center gap-8 ${align === "left" ? "md:flex-row" : "md:flex-row-reverse" } justify-end `} >
            <div>
                <h2 className=' md:text-3xl sm:text-2xl text-azulAs '>{name}</h2>
                <h2 className={` text-xl font-thin text-whiteAs font-especial sm:text-center ${align === ' right ' ? ' md:text-right' : 'md:text-left' }`}> {year} </h2>
                <a href={link} rel="noopener noreferrer" target='_blank' className={` text-lg flex gap-2 items-center text-azulAs hover:text-whiteAs transition-all duration-500 cursor-pointer sm:justify-self-center ${ align === 'left' ? 'md:justify-self-end' : 'md:justify-self-start' } `} >
                    View <BiSolidRightTopArrowCircle />
                </a>
            </div>
            <div className='max-h-[220px] max-w-[400px] rounded-xl overflow-hidden group   relative z-[1] border border-whiteAs '>
                <div className=' w-full h-full bg-azulAs md:block sm:hidden opacity-50 absolute z-[5] left-0 group-hover:opacity-0 transition-all duration-500 '></div>
                <img className=' group-hover:scale-110 transform transition-all  duration-500'  src={image} alt="Ig" />
            </div>
        </div>
    </motion.div>
  )
}

export default SingleProjects