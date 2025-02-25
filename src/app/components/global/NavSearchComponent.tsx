import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import NavSearchPostResults from './NavSearchPostResults';
import NavSearchPagesResults from './NavSearchPagesResults';
import Link from 'next/link';
const NavSearchComponent = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='flex items-center w-56 h-8 gap-5
    md:w-72
    '>
        <Link href={`/search/${searchQuery}`}>
            <FaSearch className='text-2xl'/>
        </Link>
        <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchActive(true)}
            onBlur={() => setIsSearchActive(false)}
            type="text" 
            placeholder='Search...' 
            className='w-full h-full bg-transparent focus:outline-none'
        />

        {isSearchActive && searchQuery.trim() !== '' && (
            <div className='absolute right-0 top-[56px] w-full py-14 h-screen flex flex-col items-center gap-14 bg-white shadow-lg px-4
            overflow-scroll scroll-smooth scrollbar-hide
            md:px-10 md:py-14 
            '>
                <NavSearchPostResults category='Events' searchQuery={searchQuery} />
                <NavSearchPostResults category='Lists' searchQuery={searchQuery} />
                <NavSearchPagesResults searchQuery={searchQuery} />
            </div>
        )}
    </div>
  )
}

export default NavSearchComponent