import React from 'react'
import SingleExperience from './SingleExperience';
import { FaArrowRight } from "react-icons/fa";
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'


const experiences = [
    {
      job: 'Desarrollador web',
      company: 'Social Disrupters / Aiesec alumni',
      date: 'Jun/2020 - Sep/2022'  ,
    },
    {
      job: 'Desarrollador web / Lider TI',
      company: 'Buytiti',
      date: 'Sep/2022 - Nov/2023',
      url: 'https://buytiti.com/'
    },
    {
      job: 'Desarrollador web / Front end',
      company: 'Finvero',
      date: 'Nov/2023 - Abr/2025',
      url: 'https://finvero.com/'
    },
  ];


const AllExperience = () => {
  return (
    <div className=' flex md:flex-row sm:flex-col-reverse items-center justify-between mt-12 gap-3 '>
        { experiences.map((experience, index) =>{
            return (
                <React.Fragment key={index}>
                  <SingleExperience experience={experience} />
                  {index < 2 && (
                    <motion.div
                      variants={fadeIn("right", 0.2)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0 }}
                    >
                      <FaArrowRight className="text-6xl text-azulAs lg:block sm:hidden" />
                    </motion.div>
                  )}
                </React.Fragment> 
            )
        } ) }
    </div>
  )
}

export default AllExperience