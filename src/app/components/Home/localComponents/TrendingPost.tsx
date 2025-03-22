'use client'
import { notoSerif } from '@/app/utils'
import React from 'react'
import TrendingImage from './TrendingImage'
import { useRouter } from 'next/navigation'

const TrendingPost = ({ trendingPost }: { trendingPost: any }) => {
  const router = useRouter()
  return (
    <div className='w-full flex flex-col gap-5 cursor-pointer
    md:flex-row
    xl:flex-col
    '
    onClick={() => router.push(`/article/${trendingPost.sys.id}`)}
    >
       <TrendingImage trendingLikes={trendingPost.fields.likesCount} trendingCommentsCount={trendingPost.fields.commentsCount} trendingImage={trendingPost.fields.image.fields.file.url} trendingTitle={trendingPost.fields.title}/>

                    <div className='w-full flex flex-col gap-3 justify-center
                    md:w-1/3
                    xl:w-full
                    '>
                        <div className='flex gap-4 text-xs md:text-sm'>
                        <p className='font-bold capitalize'>{trendingPost.fields.category}</p>
                        <p>{trendingPost.sys.createdAt.split('T')[0]}</p>
                    </div>
                    <h3 className={`${notoSerif.className} font-bold md:text-2xl`}>{trendingPost.fields.title}</h3>
                    <p className="line-clamp-3">{trendingPost.fields.content.content.find((node: any) => node.nodeType === 'paragraph')?.content[0]?.value}</p>
                    </div>
    </div>
  )
}

export default TrendingPost