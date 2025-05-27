import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className=' flex flex-col gap-6 w-[300px] '>
        <p className=' text-azulAs font-bold uppercase text-3xl font-especial text-center  '>Desde 2021</p>
        <div className=' flex justify-center items-center gap-4 '>
            <ExperienceInfo number='+3' text='Años' />
            <p className=' font-bold text-6xl text-whiteAs '>-</p>
            <ExperienceInfo number='+15' text='WebSites' />
        </div>
        <p className='text-center text-greyLigthAs '>
            Me adapto a distintos entornos de desarrollo y proyectos.
        </p>
        {/* <ExperienceInfo number='$100k' text='Max Buget' />   */}
    </div>
  )
}

export default ExperienceTopLeft