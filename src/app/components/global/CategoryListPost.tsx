'use client'

import React from 'react'
import CategoryListPostImage from './CategoryListPostImage'
import { notoSerif } from '@/app/utils'
import { useRouter } from 'next/navigation'

const CategoryListPost = ({post, comments}: {post: any, comments: any}) => {
    const router = useRouter()
    const postComments = comments.filter((comment: any) => comment.fields.postId === post.sys.id)
    return (
        <div className='w-full flex flex-col gap-3 cursor-pointer'
        onClick={() => router.push(`/article/${post.sys.id}`)}
        >
          <CategoryListPostImage image={post.fields.image.fields.file.url} likes={post.fields.likesCount} comments={postComments.length}/>
            
            <div className='flex flex-col gap-3 md:gap-2 lg:w-full'>
            <div className='flex gap-4 text-xs '>
                            <p className='font-bold capitalize'>{post.fields.category}</p>
                            <p>{post.fields.publishedDate}</p>
                        </div>
                        <h3 className={`${notoSerif.className} font-bold`}>{post.fields.title}</h3>
            
            </div>
           
        </div>
      )
}

export default CategoryListPost