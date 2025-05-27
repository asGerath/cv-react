import React from 'react'
import { AboutImg } from '../../assets'

const AboutMeImage = () => {
  return (
    <div className='h-[500px] w-[300px] relative '>
        <div className='h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden '>
            <img src={AboutImg} className='h-full w-auto object-cover  ' alt="" />
        </div>
        <div className='h-[500px] w-[250px] bg-azulAs absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10 '></div>
    </div>
  )
}

export default AboutMeImage