import React, { useState, useEffect } from 'react'
import NavLogo from './NavLogo'
import NavSocialsList from './NavSocialsList'
import NavSearchComponent from './NavSearchComponent'
import NavMenu from './NavMenu'

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
    <nav className='fixed top-0 left-0 w-full h-auto flex flex-col text-text'>
      <div className={`w-full flex items-center justify-between px-4 border-b transition-all duration-300 ${
        isScrolled ? 'h-0 overflow-hidden' : 'h-14'
      }`}>
        <NavLogo />
        <NavSocialsList />
      </div>
      <div className='relative w-full h-14 flex items-center justify-between px-4  border-b'>
        <NavMenu />
        <NavSearchComponent />
      </div>
    </nav>
  )
}

export default Nav