import React from 'react'
import NavbarLogo from '../navbar/NavbarLogo';



const links = [
    {link: "Sobre mí", section: "about" },
    {link: "Habilidades", section:"skills" },
    {link: "Experiencia", section:"experience" },
    {link: "Projects", section:"projects" },
    {link: "Contact", section:"contact" },
];

const FooterMain = () => {
  return (
    <div className='px-4'>
        <div className=' w-full h-[1px] bg-greyMedium mt-24 '></div>
        <div className=' flex  lg:flex-row justify-between items-center gap-4 mt-4 max-w-[1200px] mx-auto '>
            <NavbarLogo />
            <ul className='  gap-4 text-whiteAs text-xl hidden ' >
                {links.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className=' hover:text-greyMedium transition-all cursor-pointer duration-500  ' href="#"> {item.link} </a>
                        </li>
                    );
                })}
            </ul>
            <p className=' text-sm text-azulAs '>&copy;asGerath 2025</p>
        </div>
    </div>
  )
}

export default FooterMain