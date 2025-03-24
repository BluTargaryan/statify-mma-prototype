'use client'

import React, { useState } from 'react'
import { notoSerif } from '@/app/utils'
import Image from 'next/image'
import CommentComp from '@/app/components/Article/CommentComp'
import {FaComments} from 'react-icons/fa6'
import { TiHeartOutline, TiHeart } from 'react-icons/ti'
import RelatedPosts from '@/app/components/Article/RelatedPosts'
import { useParams } from 'next/navigation'
import { useContentful } from '@/app/context/ContentfulContext'
import CheckInComp from '@/app/components/Article/CheckInComp'
const Article = () => {
  const [isLiked, setIsLiked] = useState(false)
  const {id} = useParams()
  const {posts, comments, loading, error} = useContentful()
  
  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">Error: {error}</div>
  }

  if (!id) {
    return <div className="flex justify-center items-center min-h-screen">Invalid article ID</div>
  }

  const post = posts.find((post: any) => post.sys.id === id)
  
  if (!post) {
    return <div className="flex justify-center items-center min-h-screen">Post not found</div>
  }

  const postComments = comments?.filter((comment: any) => comment.fields.postId === post.sys.id) || []
  const commentsCount = postComments.length

  const content = post.fields.content.content
  if (content) {
    console.log(content)
  }

  return (
    <main className='py-20 flex flex-col gap-14  md:gap-24 lg:gap-16'>
      <CheckInComp />
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
          <p>{post.fields.likesCount} likes</p>
            {isLiked ? (
              <TiHeart className='text-2xl text-red-500 cursor-pointer' onClick={() => setIsLiked(!isLiked)}/>
            ) : (
              <TiHeartOutline className='text-2xl cursor-pointer' onClick={() => setIsLiked(!isLiked)}/>
            )}
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
        <div className="richtext-edits">
          {content && content.map((block: any) => {
            if (block.content) {
              return block.content.map((item: any, index: number) => {
                switch (block.nodeType) {
                  case 'text':
                    return <p key={item.value + index}>{item.value}</p>
                  case 'heading-1':
                    return <h1 key={item.value + index} className="text-3xl font-bold">{item.value}</h1>
                  case 'heading-2':
                    return <h2 key={item.value + index} className="text-2xl font-bold">{item.value}</h2>
                  case 'heading-3':
                    return <h3 key={item.value + index} className="text-xl font-bold">{item.value}</h3>
                  case 'unordered-list':
                    return <ul key={item.value + index} className="list-disc ml-5">{item.value}</ul>
                  case 'ordered-list':
                    return <ol key={item.value + index} className="list-decimal ml-5">{item.value}</ol>
                  default:
                    return <p key={item.value + index}>{item.value}</p>
                }
              })
            }
            return null
          })}
        </div>
        <CommentComp comments={postComments} />
      </section>
      <RelatedPosts category={post.fields.category} postId={post.sys.id}/>
    </main>
  )
}

export default Article