import React from 'react'
import Image from 'next/image'
import { FaComments, FaHeart } from 'react-icons/fa6'
import { useContentful } from '@/app/context/ContentfulContext'

const LatestImage = ({ postImage, postId, postLikes }: { postImage: string, postId: string, postLikes: number }) => {
    const { comments } = useContentful();
    const postComments = comments.filter((comment: any) => comment.fields.postId === postId);
    return (
        <div className='w-full h-44 relative lg:h-28 xl:h-44'>
                <Image 
              src={postImage} 
              alt='Statify-MMA'
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover rounded absolute top-0 left-0"
            />
            <div className='absolute top-2 left-2 text-xs text-bg px-1  h-6 bg-text rounded flex gap-3 z-10'>
              <span className='flex gap-1 items-center'>
              <FaComments />
              <p>{postComments.length}</p>
              </span>
              <span className='flex gap-1 items-center'>
              <FaHeart />
              <p>{postLikes}</p>
              </span>
            </div>
          </div>
      )
}

export default LatestImage