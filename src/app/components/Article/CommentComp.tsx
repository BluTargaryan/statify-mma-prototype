import React, { useState } from 'react'
import CommentItem from './CommentItem'
import { IoReloadOutline } from 'react-icons/io5'
import { useContentful } from '@/app/context/ContentfulContext'
import CheckInComp from './CheckInComp'
import { useAuth } from '@/app/context/AuthContext'
import { createClient } from 'contentful-management'

const CommentComp = ({postId}: {postId: string}) => {
  const {users, comments, refreshComments} = useContentful()
  const { user } = useAuth()
  const [visibleComments, setVisibleComments] = useState(5)
  const [showCheckIn, setShowCheckIn] = useState(false)
  const [commentText, setCommentText] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmitComment = async () => {
    if (!user) {
      setShowCheckIn(true)
      return
    }
    
    if (commentText.trim()) {
      try {
        setIsSubmitting(true)
        const client = createClient({
          accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_TOKEN || '',
        })

        const space = await client.getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '')
        const environment = await space.getEnvironment(process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || '')
        
        // Create new comment entry
        const entry = await environment.createEntry('comment', {
          fields: {
            content: {
              'en-US': commentText
            },
            userId: {
              'en-US': user.sys.id
            },
            postId: {
              'en-US': postId
            },
            parentId: {
              'en-US': null
            }
          }
        })

        await entry.publish()
        
        // Refresh comments to get the latest data
        await refreshComments()
        
        setCommentText('') // Clear the textarea after successful submission
        
      } catch (error) {
        console.error('Error creating comment:', error)
        alert('Failed to post comment. Please try again.')
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const postComments = comments?.filter((comment: any) => comment.fields.postId === postId && !comment.fields.parentId) || []

  return (
    <div id='statify-comments' className='w-full flex flex-col gap-8'>
      <CheckInComp isVisible={showCheckIn} onClose={() => setShowCheckIn(false)} />
      <h2 className='text-xl font-bold font-noto md:text-2xl'>Comments</h2>
      <div className='flex flex-col gap-5'>
        <textarea 
          className='w-full h-24 border-2 border-text rounded-md p-2 bg-transparent' 
          placeholder='Add a comment'
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          disabled={isSubmitting}
        />
        <button 
          className='textbase bg-text hover:bg-secondary active:bg-primary transition-all duration-300 text-bg hover:text-text active:text-bg rounded w-full p-2 h-14 md:w-1/5 xl:h-14 disabled:opacity-50'
          onClick={handleSubmitComment}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Posting...' : 'Add comment'}
        </button>
        {postComments
          .slice(0, visibleComments)
          .map((comment: any, index: number) => (
            <CommentItem 
              key={`comment-${comment.sys?.id || index}`} 
              comment={comment} 
              user={users.find((user: any) => user.sys.id === comment.fields.userId)}
            />
        ))}
        <span 
          className={`w-fit flex items-center gap-2 ${postComments.length > visibleComments ? 'cursor-pointer opacity-100' : 'cursor-not-allowed opacity-50'} group`}
          onClick={() => {
            if (postComments.length > visibleComments) {
              setVisibleComments(prev => prev + 5)
            }
          }}
        >
          <p className='font-bold'>Load more comments</p>
          <IoReloadOutline className={`${postComments.length > visibleComments ? 'group-hover:animate-spin' : ''} transition-all duration-300`}/>
        </span>
      </div>
    </div>
  )
}

export default CommentComp