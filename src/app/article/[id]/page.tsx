'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { notoSerif } from '@/app/utils'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation'
import { useContentful } from '@/app/context/ContentfulContext'
import { useAuth } from '@/app/context/AuthContext'
import { createClient } from 'contentful-management'
import { FaComments } from 'react-icons/fa6'
import { TiHeartOutline, TiHeart } from 'react-icons/ti'

// Preload critical components
const CommentComp = dynamic(() => import('@/app/components/Article/CommentComp'), {
  loading: () => (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-200 rounded w-1/4"></div>
      <div className="space-y-3">
        <div className="h-32 bg-gray-200 rounded"></div>
      </div>
    </div>
  ),
  ssr: true,
});

const CheckInComp = dynamic(() => import('@/app/components/Article/CheckInComp'), {
  ssr: false,
});

// Lazy load non-critical components
const RelatedPosts = dynamic(() => import('@/app/components/Article/RelatedPosts'), {
  loading: () => (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-200 rounded w-1/4"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-64 bg-gray-200 rounded"></div>
        ))}
      </div>
    </div>
  ),
  ssr: false,
});

const RichTextContent = dynamic(() => import('@/app/components/Article/RichTextContent'), {
  loading: () => (
    <div className="animate-pulse space-y-4">
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      <div className="h-4 bg-gray-200 rounded w-4/6"></div>
    </div>
  ),
  ssr: true,
});

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
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        Error: {error}
      </div>
    )
  }

  if (!id) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Invalid article ID
      </div>
    )
  }

  const post = posts.find((post: any) => post.sys.id === id)
  
  if (!post) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Post not found
      </div>
    )
  }

  const postComments = comments?.filter((comment: any) => comment.fields.postId === post.sys.id) || []
  const commentsCount = postComments.length

  const content = post.fields.content.content

  const updateLikesCount = async (increment: boolean) => {
    if (!user) return;

    try {
      setIsUpdating(true)
      const client = createClient({
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_TOKEN || '',
      })

      const space = await client.getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '')
      const environment = await space.getEnvironment(process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || '')
      
      const entry = await environment.getEntry(post.sys.id)
      const newLikes = increment ? currentLikesCount + 1 : currentLikesCount - 1

      entry.fields = {
        ...entry.fields,
        likesCount: {
          'en-US': newLikes
        }
      }

      const updatedEntry = await entry.update()
      await updatedEntry.publish()

      setCurrentLikesCount(newLikes)
      setIsLiked(increment)
    } catch (error) {
      console.error('Error updating likes:', error)
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
    <main className='py-20 flex flex-col gap-14 md:gap-24 lg:gap-16'>
      <Suspense fallback={null}>
        <CheckInComp isVisible={showCheckIn} onClose={() => setShowCheckIn(false)} />
      </Suspense>

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
              aria-label={isLiked ? "Unlike article" : "Like article"}
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

      <div className="relative w-full aspect-[16/9] md:aspect-[2/1]">
        <Image 
          src={`https:${post.fields.image.fields.file.url}`} 
          alt={post.fields.title} 
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 70vw"
          className='object-cover object-center rounded'
          priority
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTY3LjIyOUFTRjo/Tj4yMkhiSk46NjU1VkZFRkpKQj4+Qj7/2wBDARUXFx4aHjshITtBNkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>

      <section className="flex flex-col gap-8 md:gap-9 lg:w-4/5 lg:mx-auto">
        <Suspense fallback={
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        }>
          <RichTextContent content={content} />
        </Suspense>

        <Suspense fallback={
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="space-y-3">
              <div className="h-32 bg-gray-200 rounded"></div>
            </div>
          </div>
        }>
          <CommentComp postId={post.sys.id} />
        </Suspense>
      </section>

      <Suspense fallback={
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      }>
        <RelatedPosts category={post.fields.category} postId={post.sys.id}/>
      </Suspense>
    </main>
  )
}

export default Article