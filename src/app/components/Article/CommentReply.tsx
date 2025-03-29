import { imageTemplate } from '@/app/inAppData/postData'
import React from 'react'
import Image from 'next/image'

const CommentReply = ({comment, user}: {comment: any, user: any}) => {
  // const [isReplyOpen, setIsReplyOpen] = useState(false);
  return (
    <div className='w-full flex flex-col gap-2'>
      <span className='flex items-center gap-4'>
        <Image 
          src={imageTemplate}
          alt="Commenter avatar"
          width={0} 
          height={0} 
          sizes="100vw" 
          className='w-7 h-7 object-cover rounded-full' 
        />
        <h2 className='font-bold font-noto'>
          {user?.fields?.email ? user.fields.email.split('@')[0] : 'Anonymous User'}
        </h2>
      </span>
      <div className='w-full pl-11 flex flex-col gap-5'>
        <div className='flex flex-col gap-1'>
          <p>{comment.fields.content}</p>
          {/* <span className='flex gap-3 items-center'>
            <span className='flex gap-2 items-center cursor-pointer' onClick={() => setIsReplyOpen(!isReplyOpen)}>
              <FaReply/>
              <p>Reply</p>
            </span>
                  <span className='flex gap-2 items-center'>
                    <TiHeartOutline/>
                    <p>200 likes</p>
                  </span>
          </span> */}
        </div>
        {/* {isReplyOpen && (
          <>
            <textarea className='w-full h-24 border-2 border-text rounded-md p-2 bg-transparent' placeholder='Add a comment' />
            <button className='textbase bg-text hover:bg-secondary active:bg-primary transition-all duration-300 text-bg hover:text-text active:text-bg rounded w-full p-2 h-14
              md:w-1/5 xl:h-14
            '>
              Add comment
            </button>
          </>
        )} */}
      </div>
      
    </div>
  )
}

export default CommentReply