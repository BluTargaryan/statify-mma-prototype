import { notoSerif } from '@/app/utils'
import React from 'react'
import TrendingImage from './TrendingImage'

const TrendingPost = () => {
  return (
    <div className='w-full flex flex-col gap-5
    md:flex-row
    lg:flex-col
    '>
       <TrendingImage />

                    <div className='w-full flex flex-col gap-3 justify-center
                    md:w-1/3
                    lg:w-full
                    '>
                        <div className='flex gap-4 text-xs md:text-sm'>
                        <p className='font-bold'>Category</p>
                        <p>Mar 2021</p>
                    </div>
                    <h3 className={`${notoSerif.className} font-bold md:text-2xl`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</h3>
                    <p className="line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Voluptate enim, minus dolorum expedita assumenda. Corporis amet iste quo excepturi deserunt, accusantium repellat perspiciatis maxime necessitatibus voluptatem nulla ducimus.</p>
                    </div>
    </div>
  )
}

export default TrendingPost