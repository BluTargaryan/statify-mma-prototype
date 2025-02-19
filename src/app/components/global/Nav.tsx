import React from 'react'
import NavLogo from './NavLogo'
import NavSocialsList from './NavSocialsList'
import NavSearchComponent from './NavSearchComponent'
import NavMenu from './NavMenu'
const Nav = () => {
  return (
    <nav className='w-full h-auto flex flex-col text-text'>
      <div className='w-full h-14 flex items-center justify-between px-4  border-b'>
        <NavLogo />
        <NavSocialsList />
      </div>
      <div className='w-full h-14 flex items-center justify-between px-4  border-b'>
      <NavMenu />
      <NavSearchComponent />
      </div>
    </nav>
  )
}

export default Nav