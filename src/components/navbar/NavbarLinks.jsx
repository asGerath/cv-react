import React from 'react'
import { Link } from 'react-scroll'

const links = [
    { link: "Sobre mí", section: "about" },
    { link: "Habilidades", section: "skills" },
    { link: "Experiencia", section: "experience" },
    { link: "Proyectos", section: "projects" },
    { link: "Contacto", section: "contact" },
];

const NavbarLinks = ({ onLinkClick }) => {
  return (
    <ul className='flex gap-6 text-whiteAs font-bold text-center lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-azulAs/30 lg:bg-black backdrop-blur-lg sm:w-full py-4 '>
      {links.map((link, index) => (
        <li key={index} className='group'>
          <Link
            to={link.section}
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            className='cursor-pointer text-whiteAs hover:text-azulAs transition-all duration-500'
            onClick={onLinkClick}
          >
            {link.link}
          </Link>
          <div className='mx-auto bg-azulAs w-0 group-hover:w-full h-[1px] transition-all duration-500'></div>
        </li>
      ))}
    </ul>
  )
}

export default NavbarLinks
