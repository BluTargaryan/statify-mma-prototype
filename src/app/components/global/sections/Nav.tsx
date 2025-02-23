'use client';

import React, { useState, useEffect } from 'react'
import NavLogo from '../../global/NavLogo'
import NavSocialsList from '../../global/NavSocialsList'
import NavSearchComponent from '../../global/NavSearchComponent'
import NavMenu from '../../global/NavMenu'

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className='fixed top-0 left-0 w-full h-auto flex flex-col text-text z-40  px-4 bg-bg 
    md:px-10
      lg:px-36
    '>
      <div className={`w-full flex items-center justify-between border-b transition-all duration-300 ${
        isScrolled ? 'h-0 overflow-hidden' : 'h-14 md:h-16'
      }
      `}>
        <NavLogo />
        <NavSocialsList />
      </div>
      <div className='relative w-full h-14 flex items-center justify-between border-b
      md:h-16 
      '>
        <NavMenu />
        <NavSearchComponent />
      </div>
    </nav>
  )
}

export default Nav