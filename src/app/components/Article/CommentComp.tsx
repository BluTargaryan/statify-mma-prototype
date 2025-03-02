import React from 'react'
import CommentItem from './CommentItem'
import { IoReloadOutline } from 'react-icons/io5'
const CommentComp = () => {
  return (
    <div className='w-full flex flex-col gap-8'>
        <h2 className='text-xl font-bold font-noto md:text-2xl'>Comments</h2>
        <div className='flex flex-col gap-5'>
        <textarea className='w-full h-24 border-2 border-text rounded-md p-2 bg-transparent' placeholder='Add a comment' />
        <CommentItem />
        <CommentItem />
        <span className='flex items-center gap-2'>
            <p className='font-bold'>Load more comments</p>
            <IoReloadOutline/>
        </span>
            </div>

    </div>
  )
}

export default CommentComp