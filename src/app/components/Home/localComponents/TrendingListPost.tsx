'use client'

import { notoSerif } from '@/app/utils'
import React from 'react'
import TrendingListPostImage from './TrendingListPostImage'
import { useRouter } from 'next/navigation'

const TrendingListPost = ({ trendingPost }: { trendingPost: any }) => {
  const router = useRouter()
  return (
    <div className='w-full flex flex-col gap-3 md:w-1/2 cursor-pointer'
    onClick={() => router.push(`/article/${trendingPost.sys.id}`)}
    >
<TrendingListPostImage 
trendingPostImage={trendingPost.fields.image.fields.file.url} 
trendingPostLikes={trendingPost.fields.likesCount}
trendingPostId={trendingPost.sys.id}
/>       

        <div className='flex gap-4 text-xs'>
                        <p className='font-bold capitalize'>{trendingPost.fields.category}</p>
                        <p>{trendingPost.sys.createdAt.split('T')[0]}</p>
                    </div>
                    <h3 className={`${notoSerif.className} font-bold md:text-2xl`}>{trendingPost.fields.title}</h3>
                    <p className='hidden md:block'>{trendingPost.fields.description}</p>
        
    </div>
  )
}

export default TrendingListPost