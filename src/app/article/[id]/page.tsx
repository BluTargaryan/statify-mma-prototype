'use client'

import React from 'react'
import { notoSerif } from '@/app/utils'
import Image from 'next/image'
import { posts } from '@/app/inAppData/postData'
import CommentComp from '@/app/components/Article/CommentComp'
import {FaComments} from 'react-icons/fa6'
import { TiHeartOutline } from 'react-icons/ti'
import RelatedPosts from '@/app/components/Article/RelatedPosts'
  const Article = () => {
  const post = posts[0]



  return (
    <main className='py-20 flex flex-col gap-14  md:gap-24 lg:gap-16'>
      <section className='w-full flex flex-col gap-5 items-center lg:gap-6'>
        <div className='flex gap-4 text-xs md:text-sm'>
          <p className='font-bold'>{post.category.name}</p>
          <p>{post.date}</p>
        </div>
        <h1 className={`${notoSerif.className} text-3xl font-bold text-center md:text-4xl lg:text-6xl`}>
          {post.title}
        </h1>
        <div className='flex gap-4 text-xs md:text-sm lg:text-xl lg:gap-6'>
          <p>by {post.author}</p>
          <span className='flex gap-3 items-center'>
          <p>200 comments</p>
          <FaComments className='text-base'/>
          </span>
          <span className='flex gap-3 items-center'>
          <p>200 likes</p>
            <TiHeartOutline className='text-base'/>
          </span>
        </div>
      </section>
      <Image 
        src={post.image} 
        alt={post.title} 
        width={0} 
        height={0} 
        sizes="100vw" 
        className='w-full h-72 object-cover object-center rounded md:h-[485px]' 
      />
      <section
        className="flex flex-col gap-8 md:gap-9  lg:w-4/5 lg:mx-auto"
      >
        <div className="richtext-edits"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <CommentComp />
      </section>
      <RelatedPosts />
    </main>
  )
}

export default Article