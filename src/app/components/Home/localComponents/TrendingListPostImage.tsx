import React from 'react'
import Image from 'next/image'
import { FaBolt, FaComments, FaHeart } from 'react-icons/fa6'
import { useContentful } from '@/app/context/ContentfulContext'

const TrendingListPostImage = ({ trendingPostImage, trendingPostLikes, trendingPostId }: { trendingPostImage: string, trendingPostLikes: number, trendingPostId: string }) => {
  const { comments} = useContentful();

  const trendingPostComments = comments.filter((comment: any) => comment.fields.postId === trendingPostId);
  return (
    <div className='w-full h-44 relative md:h-72 xl:h-80'>
        <Image 
          src={`https:${trendingPostImage}`} 
          alt='Statify-MMA'
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover rounded absolute top-0 left-0"
        />
        <div className='absolute top-2 left-2 text-xs w-6 h-6 bg-secondary rounded flex items-center justify-center z-10'>
          <FaBolt />
        </div>
        <div className='absolute top-2 right-2 text-sm text-bg px-1  h-6 bg-text rounded flex gap-3 z-10'>
          <span className='flex gap-1 items-center'>
          <FaComments />
          <p>{trendingPostComments.length}</p>
          </span>
          <span className='flex gap-1 items-center'>
          <FaHeart />
          <p>{trendingPostLikes}</p>
          </span>
        </div>
      </div>
  )
}

export default TrendingListPostImage