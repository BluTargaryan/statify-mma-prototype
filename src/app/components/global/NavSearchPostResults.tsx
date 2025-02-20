import React from 'react'
import { posts } from '@/app/inAppData/postData'
import Link from 'next/link'
import { FaLongArrowAltRight } from "react-icons/fa";
import { notoSerif } from '@/app/utils'

interface NavSearchPostResultsProps {
  category: 'Events' | 'Lists';
  searchQuery: string;
}

const NavSearchPostResults: React.FC<NavSearchPostResultsProps> = ({ category, searchQuery }) => {
  const filteredPosts = posts
    .filter(post => post.category.name === category)
    .filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  if (filteredPosts.length === 0) return null;

  return (
    <div className='w-full flex flex-col gap-7'>
        <div className='flex items-center justify-between'>
            <h2 className={`text-2xl font-bold ${notoSerif.className}`}>{category}</h2>
            <Link href='/events' className='flex items-center gap-3 font-bold hover:gap-4 transition-all duration-300'>
                <p>View all</p>
                <FaLongArrowAltRight className='text-2xl' />
            </Link>
        </div>

        <div className='flex flex-col gap-6'>
            {filteredPosts.map((post) => (
                <div key={post.id} className='flex flex-col gap-2'>
                    <p className='text-lg font-bold'>{post.title}</p>
                    <div className='flex gap-4'>
                        <p>{post.category.name}</p>
                        <p>{post.date}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default NavSearchPostResults