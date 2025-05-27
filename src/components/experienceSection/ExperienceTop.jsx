import React from 'react'
import ExperienceTopLeft from './ExperienceTopLeft'
import ExperienceTopMiddle from './ExperienceTopMiddle'
import ExperienceTopRigth from './ExperienceTopRigth'

const ExperienceTop = () => {
  return (
    <div className=' flex lg:flex-row sm:flex-col gap-4 items-center justify-center '>
        <ExperienceTopLeft />
        <ExperienceTopMiddle />
        <ExperienceTopRigth />
    </div>
  )
}

export default ExperienceTop