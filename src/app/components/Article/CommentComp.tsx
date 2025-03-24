import React from 'react'
import CommentItem from './CommentItem'
import { IoReloadOutline } from 'react-icons/io5'
const CommentComp = ({comments}: {comments: any}) => {
  return (
    <div className='w-full flex flex-col gap-8'>
        <h2 className='text-xl font-bold font-noto md:text-2xl'>Comments</h2>
        <div className='flex flex-col gap-5'>
        <textarea className='w-full h-24 border-2 border-text rounded-md p-2 bg-transparent' placeholder='Add a comment' />
        <button className='textbase bg-text hover:bg-secondary active:bg-primary transition-all duration-300 text-bg hover:text-text active:text-bg rounded w-full p-2 h-14
        md:w-1/5 xl:h-14
        '>
            Add comment
        </button>
        {comments?.map((comment: any) => (
            <CommentItem/>
        ))}
        <span className='w-fit flex items-center gap-2 cursor-pointer group'>
            <p className='font-bold'>Load more comments</p>
            <IoReloadOutline className='group-hover:animate-spin transition-all duration-300 '/>
        </span>
            </div>

    </div>
  )
}

export default CommentComp