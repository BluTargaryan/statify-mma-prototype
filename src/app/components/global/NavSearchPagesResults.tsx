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
    <div className="w-full">
      <h3 className="font-semibold mb-4">Pages</h3>
      <ul className="space-y-2">
        {filteredPages.map(page => (
          <li key={page.id} className="hover:bg-gray-100 p-2 rounded cursor-pointer">
            {page.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavSearchPagesResults