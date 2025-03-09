'use client'

import React from 'react'
import { notoSerif } from '@/app/utils'
import LatestImage from './LatestImage'
import { useRouter } from 'next/navigation'
import Loading from '@/app/components/global/Loading'
const LatestPost = () => {
  const router = useRouter()
  return (
    <div className='w-full flex flex-col gap-3 cursor-pointer'
    onClick={() => router.push('/article/1')}
    >
          <LatestImage />

        <div className='flex gap-4 text-xs md:text-sm'>
                        <p className='font-bold'>Category</p>
                        <p>Mar 2021</p>
                    </div>
                    <h3 className={`${notoSerif.className} font-bold`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</h3>
        
    </div>
  )
}

export default LatestPost