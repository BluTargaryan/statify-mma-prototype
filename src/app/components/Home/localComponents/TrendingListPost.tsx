'use client'

import { notoSerif } from '@/app/utils'
import React from 'react'
import TrendingListPostImage from './TrendingListPostImage'
import { useRouter } from 'next/navigation'

const TrendingListPost = () => {
  const router = useRouter()
  return (
    <div className='w-full flex flex-col gap-3 md:w-1/2 cursor-pointer'
    onClick={() => router.push('/article/1')}
    >
<TrendingListPostImage />       

        <div className='flex gap-4 text-xs'>
                        <p className='font-bold'>Category</p>
                        <p>Mar 2021</p>
                    </div>
                    <h3 className={`${notoSerif.className} font-bold md:text-2xl`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</h3>
                    <p className='hidden md:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Voluptatibus, necessitatibus expedita. Corporis amet inventore explicabo quasi cumque dignissimos maxime, accusantium tempore deserunt!</p>
        
    </div>
  )
}

export default TrendingListPost