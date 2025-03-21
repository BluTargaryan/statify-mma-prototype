import React from 'react'
import Image from 'next/image'
import { FaBolt, FaComments, FaHeart } from 'react-icons/fa6'

const TrendingImage = ({ trendingLikes, trendingCommentsCount, trendingImage, trendingTitle }: { trendingLikes: number, trendingCommentsCount: number, trendingImage: string, trendingTitle: string }) => {
    return (
        <div className='w-full h-72 relative 
        md:w-2/3
        lg:w-full
        '>
                <Image 
              src={`https:${trendingImage}`} 
              alt={trendingTitle}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-72 object-cover rounded absolute top-0 left-0 "
            />
            <div className='absolute top-2 left-2 text-xs w-6 h-6 bg-secondary rounded flex items-center justify-center z-10'>
              <FaBolt />
            </div>
            <div className='absolute top-2 right-2 text-sm text-bg px-1  h-6 bg-text rounded flex gap-3 z-10'>
              <span className='flex gap-1 items-center'>
              <FaComments />
              <p>{trendingCommentsCount}</p>
              </span>
              <span className='flex gap-1 items-center'>
              <FaHeart />
              <p>{trendingLikes}</p>
              </span>
            </div>
          </div>
      )
}

export default TrendingImage