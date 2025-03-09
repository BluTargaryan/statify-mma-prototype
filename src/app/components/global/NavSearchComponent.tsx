import React, { useState, useRef } from 'react'
import { FaSearch } from "react-icons/fa";
import NavSearchPostResults from './NavSearchPostResults';
import NavSearchPagesResults from './NavSearchPagesResults';
import Link from 'next/link';
import { posts } from '@/app/inAppData/postData';
import { Pages } from '@/app/inAppData/pages';

const NavSearchComponent = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);

  const hasResults = () => {
    const hasMatchingPosts = posts.some(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const hasMatchingPages = Pages.some(page => 
      page.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return hasMatchingPosts || hasMatchingPages;
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
      setIsSearchActive(false);
    }
  };

  const handleItemClick = () => {
    setIsSearchActive(false);
    setSearchQuery('');
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchRef} className='flex items-center w-56 h-8 gap-5
    md:w-72
    '>
        <Link href={`/search/${searchQuery}`}>
            <FaSearch className='text-2xl'/>
        </Link>
        <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchActive(true)}
            type="text" 
            placeholder='Search...' 
            className='w-full h-full bg-transparent focus:outline-none'
        />

        {isSearchActive && searchQuery.trim() !== '' && hasResults() && (
            <div className='absolute right-0 top-[56px] w-full py-14 h-screen flex flex-col items-center gap-14 bg-white shadow-lg px-4
            overflow-scroll scroll-smooth scrollbar-hide
            md:px-10 md:py-14 
            '>
                <NavSearchPostResults category='Events' searchQuery={searchQuery} onItemClick={handleItemClick} />
                <NavSearchPostResults category='Lists' searchQuery={searchQuery} onItemClick={handleItemClick} />
                <NavSearchPagesResults searchQuery={searchQuery} onItemClick={handleItemClick} />
            </div>
        )}
    </div>
  )
}

export default NavSearchComponent