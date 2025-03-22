'use client'

import { notoSerif } from '@/app/utils'
import React from 'react'
import ListPostImage from './ListPostImage'
import { useRouter } from 'next/navigation'

const ListPost = ({ post }: { post: any }) => {
  const router = useRouter()
  return (
    <div className='w-full flex flex-col gap-3 cursor-pointer md:flex-row-reverse lg:flex-col'
    onClick={() => router.push(`/article/${post.sys.id}`)}
    >
      <ListPostImage postImage={post.fields.image.fields.file.url} postId={post.sys.id} postLikes={post.fields.likesCount}/>
        
        <div className='flex flex-col gap-3 md:w-1/2 md:gap-2 lg:w-full'>
        <div className='flex gap-4 text-xs '>
                        <p className='font-bold capitalize'>{post.fields.category}</p>
                        <p>{post.sys.createdAt.split('T')[0]}</p>
                    </div>
                    <h3 className={`${notoSerif.className} font-bold`}>{post.fields.title}</h3>
        
        </div>
       
    </div>
  )
}

export default ListPost