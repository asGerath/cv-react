import React from 'react'
import { joyFigure } from '../../assets'
import { PiHexagonThin } from "react-icons/pi";
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

function HeroPic() {
  return (
    <motion.div 
      variants={fadeIn("left", 0.2)}
      initial='hidden'  
      whileInView="show"
      viewport={ { once: false, amount: 0 } }
      className='h-full flex items-center justify-center'>
        <img className='max-h-[450px] w-auto mask-image: linear-gradient(black 80%, transparent);' src={joyFigure} alt="Joshua" />
        <div className='absolute -z-10 flex justify-center items-center animate-pulse '>
            <PiHexagonThin className='md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-azulAs blur-md animate-[spin_20s_linear_infinite] ' />
        </div>
    </motion.div>
  )
}

export default HeroPic