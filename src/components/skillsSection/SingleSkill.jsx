import React from 'react'

const SingleSkill = ( {imgSvg, text} ) => {
  return (
    <div className='hover:-translate-y-10 transition-all duration-500 group '>
        <div className='flex flex-col items-center gap-2 relative'>
            <div className='bg-black text-whiteAs h-[100px] w-[100px] flex items-center justify-center rounded-full group-hover:text-azulAs group-hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-azulAs  '> {imgSvg} </div>
            <p className='text-azulAs font-bold group-hover:text-black '> {text} </p>
        </div>
        <div className='w-[100px] h-[200px] bg-whiteAs absolute top-[50px] -z-10 '></div>
    </div>
  )
}

export default SingleSkill