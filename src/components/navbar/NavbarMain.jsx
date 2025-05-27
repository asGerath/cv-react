import React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBtn from './NavbarBtn'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

const NavbarMain = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    };
    return (
        <nav className='max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-[20] flex gap-4 mt-2 '>
            <div className='flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[.5px] border-azulAs '>
                <NavbarLogo />
                <div className={`${menuOpen ? 'sm:block' : 'sm:hidden'} lg:block`} >
                    <NavbarLinks onLinkClick={() => setMenuOpen(false)} />

                </div>
                <div className='hidden lg:flex'>

                <NavbarBtn />
                </div>
                <button className=' lg:hidden sm:block text-2xl p-3 border border-azulAs rounded-full text-whiteAs '>
                    <GiHamburgerMenu className='text-azulAs' onClick={toggleMenu} />
                </button>
            
            </div>
        </nav>
    )
}

export default NavbarMain