'use client'

import React from 'react'
import { notoSerif } from '@/app/utils'
import Image from 'next/image'
import CommentComp from '@/app/components/Article/CommentComp'
import {FaComments} from 'react-icons/fa6'
import { TiHeartOutline } from 'react-icons/ti'
import RelatedPosts from '@/app/components/Article/RelatedPosts'
import { useParams } from 'next/navigation'
import { useContentful } from '@/app/context/ContentfulContext'

const Article = () => {
  const {id} = useParams()
  const {posts, comments, loading, error} = useContentful()
  const post = posts.find((post: any) => post.sys.id === id)
  const postComments = comments?.filter((comment: any) => comment.fields.postId === post?.sys.id)
  const commentsCount = comments?.filter((comment: any) => comment.fields.postId === post?.sys.id)?.length || 0

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">Error: {error}</div>
  }

  if (!post) {
    return <div className="flex justify-center items-center min-h-screen">Post not found</div>
  }

  return (
    <main className='py-20 flex flex-col gap-14  md:gap-24 lg:gap-16'>
      <section className='w-full flex flex-col gap-5 items-center lg:gap-6'>
        <div className='flex gap-4 text-xs md:text-sm'>
          <p className='font-bold capitalize'>{post.fields.category}</p>
          <p>{post.sys.createdAt.split('T')[0]}</p>
        </div>
        <h1 className={`${notoSerif.className} text-3xl font-bold text-center md:text-4xl lg:text-6xl`}>
          {post.fields.title}
        </h1>
        <div className='flex gap-4 text-xs md:text-sm lg:text-xl lg:gap-6'>
          <p>by {post.fields.author}</p>
          <span className='flex gap-3 items-center'>
          <p>{commentsCount} comments</p>
          <FaComments className='text-base'/>
          </span>
          <span className='flex gap-3 items-center'>
          <p>{post.fields.likes} likes</p>
            <TiHeartOutline className='text-base'/>
          </span>
        </div>
      </section>
      <Image 
        src={`https:${post.fields.image.fields.file.url}`} 
        alt={post.fields.title} 
        width={0} 
        height={0} 
        sizes="100vw" 
        className='w-full h-72 object-cover object-center rounded md:h-[485px]' 
      />
      <section
        className="flex flex-col gap-8 md:gap-9  lg:w-4/5 lg:mx-auto"
      >
        {/* <div className="richtext-edits"
          dangerouslySetInnerHTML={{ __html: post.content }}
        /> */}
        <CommentComp comments={postComments} />
      </section>
      <RelatedPosts category={post.fields.category} />
    </main>
  )
}

export default Article