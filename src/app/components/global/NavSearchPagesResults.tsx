import { notoSerif } from '@/app/utils'
import React from 'react'
import { Pages } from '@/app/inAppData/pages'
import Link from 'next/link'

interface NavSearchPagesResultsProps {
  searchQuery: string;
}

const NavSearchPagesResults: React.FC<NavSearchPagesResultsProps> = ({ searchQuery }) => {

  const filteredPages = Pages
    .filter(page => 
      page.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  if (filteredPages.length === 0) return null;

  return (
    <div className="w-full gap-11 flex flex-col">
      <h3 className={`text-2xl font-bold ${notoSerif.className}`}>Pages</h3>
      <ul className="flex flex-col gap-6">
        {filteredPages.map(page => (
          <li key={page.id} className="hover:bg-gray-100 p-2 rounded cursor-pointer gap-2">
            <p>{page.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavSearchPagesResults