import React from 'react'
import Image from 'next/image'
import { imageTemplate } from '@/app/inAppData/postData'
import { FaReply } from 'react-icons/fa6'
import CommentReply from './CommentReply'
import { useState } from 'react'
import { useContentful } from '@/app/context/ContentfulContext'
import { useAuth } from '@/app/context/AuthContext'
import { createClient } from 'contentful-management'
import CheckInComp from './CheckInComp'

const CommentItem = ({comment, user}: {comment: any, user: any}) => {
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const [replyText, setReplyText] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showCheckIn, setShowCheckIn] = useState(false)
  const {comments, refreshComments} = useContentful()
  const { user: currentUser } = useAuth()

  const handleSubmitReply = async () => {
    if (!currentUser) {
      setShowCheckIn(true)
      return
    }
    
    if (replyText.trim()) {
      try {
        setIsSubmitting(true)
        const client = createClient({
          accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_TOKEN || '',
        })

        const space = await client.getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '')
        const environment = await space.getEnvironment(process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || '')
        
        // Create new reply entry
        const entry = await environment.createEntry('comment', {
          fields: {
            content: {
              'en-US': replyText
            },
            userId: {
              'en-US': currentUser.sys.id
            },
            postId: {
              'en-US': comment.fields.postId
            },
            parentId: {
              'en-US': comment.sys.id
            }
          }
        })

        await entry.publish()
        
        // Refresh comments to get the latest data
        await refreshComments()
        
        setReplyText('') // Clear the textarea after successful submission
        setIsReplyOpen(false) // Close the reply section
      } catch (error) {
        console.error('Error creating reply:', error)
        alert('Failed to post reply. Please try again.')
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  return (
    <div className='w-full flex flex-col gap-2'>
      <CheckInComp isVisible={showCheckIn} onClose={() => setShowCheckIn(false)} />
      <span className='flex items-center gap-4'>
        <Image 
          src={imageTemplate}
          alt="{post.title}" 
          width={0} 
          height={0} 
          sizes="100vw" 
          className='w-7 h-7 object-cover rounded-full' 
        />
        <h2 className='font-bold font-noto'>{user.fields.email.split('@')[0]}</h2>
      </span>
      <div className='w-full pl-11 flex flex-col gap-5'>
        <div className='flex flex-col gap-1'>
          <p>{comment.fields.content}</p>
          <span className='flex gap-3 items-center'>
            <span className='flex gap-2 items-center cursor-pointer' onClick={() => setIsReplyOpen(!isReplyOpen)}>
              <FaReply/>
              <p>Reply</p>
            </span>
            {/* <span className='flex gap-2 items-center'>
              <TiHeartOutline/>
              <p>200 likes</p>
            </span> */}
          </span>
        </div>
        {isReplyOpen && (
          <>
            <textarea 
              className='w-full h-24 border-2 border-text rounded-md p-2 bg-transparent' 
              placeholder='Add a reply'
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              disabled={isSubmitting}
            />
            <button 
              className='textbase bg-text hover:bg-secondary active:bg-primary transition-all duration-300 text-bg hover:text-text active:text-bg rounded w-full p-2 h-14
                md:w-1/5 xl:h-14 disabled:opacity-50'
              onClick={handleSubmitReply}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Posting...' : 'Add reply'}
            </button>
          </>
        )}
        {comment?.sys?.id && comments?.filter((reply: any) => reply.fields.parentId === comment.sys.id).map((reply: any) => (
          <CommentReply key={reply.sys.id} comment={reply} user={user} />
        ))}
      </div>
    </div>
  )
}

export default CommentItem