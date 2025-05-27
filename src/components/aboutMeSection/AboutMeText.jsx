import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center '>
        <h2 className='text-6xl text-azulAs mb-10 '>
            Sobre mí
        </h2>
        <p className='text-whiteAs '>
            Hola, soy Joshua Gerath Abarca Sanchez, desarrollador web front-end. Apasionado por la tecnología y el diseño, me enfoco en crear experiencias digitales que sean funcionales, intuitivas y visualmente atractivas.
            <br /> <br />
            Mis principales fortalezas son la atención al detalle, la capacidad para trabajar en equipo y un aprendizaje rápido, lo que me permite adaptarme con facilidad a nuevos desafíos y entornos.
            <br /> <br />
            Fuera del trabajo, disfruto mucho del baile, la música y la fotografía, actividades que me ayudan a mantener el equilibrio, la creatividad y la motivación. Siempre estoy en busca de nuevas oportunidades que me permitan crecer tanto en lo profesional como en lo personal.
        </p>
        {/* <button className='border border-azulAs rounded-full py-2 px-4 text-whiteAs text-lg flex items-center mt-10  hover:bg-whiteAs hover:text-blackAs transition-all duration-500 cursor-pointer md:self-start sm:self-center '>
            Mis Pr
        </button> */}
    </div>
  )
}

export default AboutMeText