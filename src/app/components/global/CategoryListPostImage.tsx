'use client'

import React from 'react'
import Image from 'next/image'
import { FaComments, FaHeart } from 'react-icons/fa6'

const CategoryListPostImage = ({image, likes, comments}: {image: any, likes: number, comments: number}) => {
    return (
        <div className='w-full h-44 relative border md:h-28 lg:w-full xl:h-32'>
            <Image 
              src={`https:${image}`} 
              alt='Statify-MMA'
              width={300}
              height={200}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
              className="w-full h-full object-cover rounded absolute top-0 left-0"
              priority={false}
            />
            <div className='absolute top-2 left-2 text-xs text-bg px-1  h-6 bg-text rounded flex gap-3 z-10'>
              <span className='flex gap-1 items-center'>
              <FaComments />
              <p>{comments}</p>
              </span>
              <span className='flex gap-1 items-center'>
              <FaHeart />
              <p>{likes}</p>
              </span>
            </div>
          </div>
      )
}

export default React.memo(CategoryListPostImage)