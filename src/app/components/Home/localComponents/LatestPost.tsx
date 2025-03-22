'use client'

import React from 'react'
import { notoSerif } from '@/app/utils'
import LatestImage from './LatestImage'
import { useRouter } from 'next/navigation'
const LatestPost = ({ post }: { post: any }) => {
  const router = useRouter()


  return (
    <div className='w-full flex flex-col gap-3 cursor-pointer'
    onClick={() => router.push(`/article/${post.sys.id}`)}
    >
     
          <LatestImage 
          postImage={`https:${post.fields.image.fields.file.url}`}
          postId={post.sys.id}
          postLikes={post.fields.likesCount}
          />
      

        <div className='flex gap-4 text-xs md:text-sm'>
                        <p className='font-bold capitalize'>{post.fields.category}</p>
                        <p>{post.sys.createdAt.split('T')[0]}</p>
                    </div>
                    <h3 className={`${notoSerif.className} font-bold`}>{post.fields.title}</h3>
        
    </div>
  )
}

export default LatestPost