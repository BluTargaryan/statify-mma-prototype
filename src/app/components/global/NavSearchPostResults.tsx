import React from 'react'
import Link from 'next/link'
import { FaLongArrowAltRight } from "react-icons/fa";
import { notoSerif } from '@/app/utils'
import { useContentful } from '@/app/context/ContentfulContext'

interface NavSearchPostResultsProps {
  category: 'events' | 'lists';
  searchQuery: string;
  onItemClick: () => void;
}

const NavSearchPostResults: React.FC<NavSearchPostResultsProps> = ({ category, searchQuery, onItemClick }) => {
  const {posts} = useContentful()
  const filteredPosts = posts
    .filter(post => post.fields.category === category)
    .filter(post => 
      post.fields.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    

  if (filteredPosts.length === 0) return null;

  return (
    <div className='w-full flex flex-col gap-7'>
        <div className='flex items-center justify-between'>
            <h2 className={`text-2xl font-bold ${notoSerif.className} capitalize`}>{category}</h2>
            <Link href='/events' onClick={onItemClick} className='flex items-center gap-3 font-bold hover:gap-4 transition-all duration-300'>
                <p>View all</p>
                <FaLongArrowAltRight className='text-2xl' />
            </Link>
        </div>

        <div className='flex flex-col gap-6'>
            {filteredPosts.map((post) => (
              <Link href={`/article/${post.sys.id}`} key={post.sys.id} onClick={onItemClick}>
                <div className='flex flex-col gap-2'>
                    <p className={`font-bold md:text-xl ${notoSerif.className}`}>{post.fields.title}</p>
                    <div className='flex gap-4 text-xs md:text-sm'>
                        <p className='font-bold capitalize'>{post.fields.category}</p>
                        <p>{post.sys.createdAt.split('T')[0]}</p>
                    </div>
                </div>
              </Link>
            ))}
        </div>
    </div>
  )
}

export default NavSearchPostResults