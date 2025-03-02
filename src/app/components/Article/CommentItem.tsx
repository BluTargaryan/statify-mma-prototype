import React from 'react'
import Image from 'next/image'
import { imageTemplate } from '@/app/inAppData/postData'
import { FaReply } from 'react-icons/fa6'
import { TiHeartOutline } from 'react-icons/ti'
const CommentItem = () => {
  return (
    <div className='w-full flex flex-col gap-2'>
        <span className='flex items-center gap-4'>
        <Image 
        src={imageTemplate}
        alt="{post.title}" 
        width={0} 
        height={0} 
        sizes="100vw" 
        className='w-7 h-7 object-cover rounded-full' 
      />
      <h2 className='font-bold font-noto'>Commenter</h2>
        </span>
        <div className='w-full pl-11 flex flex-col gap-5'>
            <div className='flex flex-col gap-1'>
                <p>Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dwddw.</p>
                <span className='flex gap-3 items-center'>
                <span className='flex gap-2 items-center'>
                <FaReply/>
          <p>Reply</p>
          </span>
          <span className='flex gap-2 items-center'>
        <TiHeartOutline/>
        <p>200 likes</p>
          </span>
          </span>
            </div>
            <textarea className='w-full h-24 border-2 border-text rounded-md p-2 bg-transparent' placeholder='Add a comment' />
        
        <div className='flex flex-col gap-2'>
        <span className='flex items-center gap-4'>
        <Image 
        src={imageTemplate}
        alt="{post.title}" 
        width={0} 
        height={0} 
        sizes="100vw" 
        className='w-7 h-7 object-cover rounded-full' 
      />
      <h2 className='font-bold font-noto'>Commenter</h2>
        </span>
        <div className='flex flex-col gap-3  pl-11'>
        <p>Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dwddw.</p>
                <span className='flex gap-3 items-center'>
                <span className='flex gap-2 items-center'>
                <FaReply/>
          <p>Reply</p>
          </span>
          <span className='flex gap-2 items-center'>
        <TiHeartOutline/>
        <p>200 likes</p>
          </span>
          </span>
          <textarea className='w-full h-24 border-2 border-text rounded-md p-2 bg-transparent' placeholder='Add a comment' />
  
        </div>
               
            </div>

        </div>
    </div>
  )
}

export default CommentItem