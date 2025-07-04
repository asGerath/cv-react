import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'


const skills = [
    {
        skill:"HTML",
        icon: FaHtml5
    },
    {
        skill:"CSS",
        icon: FaCss3Alt
    },
    {
        skill:"JavaScript",
        icon: IoLogoJavascript
    },
    {
        skill:"TypeScript",
        icon: SiTypescript
    },
    {
        skill:"ReactJs",
        icon:FaReact
    },
    {
        skill:"Git",
        icon: FaGithub
    },
    {
        skill:"Bootstrap",
        icon: FaBootstrap
    },
    {
        skill:"TailwindCSS",
        icon: RiTailwindCssFill
    }
]


const AllSkillsSM = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12 '> 
        {skills.map((item, index) =>{
            return (
                <motion.div 
                    variants={fadeIn("up", 0.2)}
                    initial='hidden'  
                    whileInView="show"
                    viewport={ { once: false, amount: 0.7 } }
                    key={index} className='flex flex-col items-center  ' >
                    <item.icon className='text-7xl  text-whiteAs ' />
                    <p className='text-center text-azulAs'> {item.skill} </p>
                </motion.div>
            )
        } )}
    </div>
  )
}

export default AllSkillsSM