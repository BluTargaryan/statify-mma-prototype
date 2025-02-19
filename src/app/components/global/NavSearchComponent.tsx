import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";

const NavSearchComponent = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <div className='flex items-center w-56 h-8 gap-5'>
        <FaSearch className='text-2xl'/>
            <input
            onFocus={() => setIsSearchActive(true)}
            onBlur={() => setIsSearchActive(false)}
            type="text" placeholder='Search...' className='w-full h-full bg-transparent focus:outline-none'/>

            {isSearchActive && (
                <div className='absolute right-0 top-28 w-full h-full flex items-center gap-5 bg-bg shadow-lg z-50'>
                    
                </div>
            )}
      </div>
  )
}

export default NavSearchComponent