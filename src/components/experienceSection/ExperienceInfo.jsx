import React from 'react'

const ExperienceInfo = ( {number, text} ) => {
  return (
    <div className='flex flex-col justify-center items-center  '>
        <p className='font-bold text-6xl text-azulAs  '> {number} </p>
        <p className='font-bold text-xl text-whiteAs '> {text} </p>
    </div>
  )
}

export default ExperienceInfo