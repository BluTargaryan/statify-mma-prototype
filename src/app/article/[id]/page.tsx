'use client'

import React, { useState, useEffect } from 'react'
import { notoSerif } from '@/app/utils'
import Image from 'next/image'
import CommentComp from '@/app/components/Article/CommentComp'
import {FaComments} from 'react-icons/fa6'
import { TiHeartOutline, TiHeart } from 'react-icons/ti'
import RelatedPosts from '@/app/components/Article/RelatedPosts'
import { useParams } from 'next/navigation'
import { useContentful } from '@/app/context/ContentfulContext'
import CheckInComp from '@/app/components/Article/CheckInComp'
import RichTextContent from '@/app/components/Article/RichTextContent'
import { useAuth } from '@/app/context/AuthContext'
import { createClient } from 'contentful-management'

const Article = () => {
  const [isLiked, setIsLiked] = useState(false)
  const [showCheckIn, setShowCheckIn] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)
  const [currentLikesCount, setCurrentLikesCount] = useState(0)
  const {id} = useParams()
  const {posts, comments, loading, error} = useContentful()
  const { user } = useAuth()
  
  // Initialize likes count
  useEffect(() => {
    if (posts && id) {
      const post = posts.find((post: any) => post.sys.id === id)
      if (post) {
        setCurrentLikesCount(post.fields.likesCount || 0)
      }
    }
  }, [posts, id])

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


  const updateLikesCount = async (increment: boolean) => {
    if (!user) return; // Early return if no user

    try {
      setIsUpdating(true)
      const client = createClient({
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_TOKEN || '',
      })

      const space = await client.getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '')
      const environment = await space.getEnvironment(process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || '')
      
      // Get the latest version of the entry
      const entry = await environment.getEntry(post.sys.id)
      const newLikes = increment ? currentLikesCount + 1 : currentLikesCount - 1

      // Update the entry with the current version
      entry.fields = {
        ...entry.fields,
        likesCount: {
          'en-US': newLikes
        }
      }

      // Update and publish with the correct version
      const updatedEntry = await entry.update()
      await updatedEntry.publish()

      // Update local states
      setCurrentLikesCount(newLikes)
      setIsLiked(increment)
    } catch (error) {
      console.error('Error updating likes:', error)
      // Optionally show an error message to the user
      alert('Failed to update likes. Please try again.')
    } finally {
      setIsUpdating(false)
    }
  }

  const handleLikeClick = () => {
    if (!user) {
      setShowCheckIn(true)
      return
    }
    updateLikesCount(!isLiked)
  }

  return (
    <main className='py-20 flex flex-col gap-14  md:gap-24 lg:gap-16'>
      <CheckInComp isVisible={showCheckIn} onClose={() => setShowCheckIn(false)} />
      <section className='w-full flex flex-col gap-5 items-center lg:gap-6'>
        <div className='flex gap-4 text-xs md:text-sm'>
          <p className='font-bold capitalize'>{post.fields.category}</p>
          <p>{post.sys.createdAt.split('T')[0]}</p>
        </div>
        <h1 className={`${notoSerif.className} text-3xl font-bold text-center md:text-4xl lg:text-6xl`}>
          {post.fields.title}
        </h1>
        <div className='flex gap-4 text-xs items-center md:text-sm lg:text-xl lg:gap-6'>
          <p>by {post.fields.author}</p>
          <span className='flex gap-3 items-center'>
            <p>{commentsCount} comments</p>
            <FaComments className='text-base'/>
          </span>
          <span className='flex gap-3 items-center'>
            <p>{currentLikesCount} likes</p>
            <button 
              onClick={handleLikeClick} 
              disabled={isUpdating}
              className="p-0 bg-transparent border-0 cursor-pointer disabled:opacity-50"
            >
              {isLiked ? (
                <TiHeart className='text-2xl text-red-500'/>
              ) : (
                <TiHeartOutline className='text-2xl'/>
              )}
            </button>
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
        <RichTextContent content={content} />
        <CommentComp postId={post.sys.id} />
      </section>
      <RelatedPosts category={post.fields.category} postId={post.sys.id}/>
    </main>
  )
}

export default Article