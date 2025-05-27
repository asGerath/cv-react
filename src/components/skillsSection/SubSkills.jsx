import React from 'react'
import SubSkillsImg from '../../assets/img/SubSkills.webp'

const SubSkills = () => {
  return (
    <div className='border-y-2 border-greyLigthAs relative '>
        <div className='absolute bg-gradient-to-r from-azulAs to-whiteAs opacity-50 w-full h-full '></div>
        <img src={SubSkillsImg} alt="" />
    </div>
  )
}

export default SubSkills