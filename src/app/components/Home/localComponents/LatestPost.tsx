import React from 'react'
import { notoSerif } from '@/app/utils'
import LatestImage from './LatestImage'

const LatestPost = () => {
  return (
    <div className='w-full flex flex-col gap-3 '>
        
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