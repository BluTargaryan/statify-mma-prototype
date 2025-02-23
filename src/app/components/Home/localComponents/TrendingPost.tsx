import { notoSerif } from '@/app/utils'
import React from 'react'
import Image from 'next/image'

const TrendingPost = () => {
  return (
    <div className='w-full flex flex-col gap-5'>
        <Image src='https://images.unsplash.com/photo-1529165980561-f19d4acc4f3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
        alt='Statify-MMA'
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-72 object-cover rounded" 
        /> 

                    <div className='w-full flex flex-col gap-3'>
                    <h3 className={`${notoSerif.className} font-bold`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</h3>
                    <div className='flex gap-4 text-xs md:text-sm'>
                        <p className='font-bold'>Category</p>
                        <p>Mar 2021</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Voluptate enim, minus dolorum expedita assumenda. Corporis amet iste quo excepturi deserunt, accusantium repellat perspiciatis maxime necessitatibus voluptatem nulla ducimus.</p>
                    </div>
    </div>
  )
}

export default TrendingPost