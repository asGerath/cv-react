import React from 'react'

function HeroGradient() {
  return (
    <div>
        <div className='shadow-azulMedioShadow absolute top-0 right-[400px] -z-10 animate-pulse ' />
        <div className='shadow-MedioShadow absolute top-0 right-0 -z-10 animate-pulse ' />
        <div className='shadow-azulMedioShadow absolute top-[300px] left-0 -z-10 opacity-50 ' />
        <div className='shadow-MedioShadow absolute top-[500px] left-0 -z-10 opacity-50 ' />
    </div>
  )
}

export default HeroGradient