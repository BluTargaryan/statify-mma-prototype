import React from 'react'
import Image from 'next/image'
import { FaBolt, FaComments, FaHeart } from 'react-icons/fa6'

const TrendingImage = () => {
    return (
        <div className='w-full h-72 relative 
        md:w-2/3
        lg:w-full
        '>
                <Image 
              src='https://images.unsplash.com/photo-1529165980561-f19d4acc4f3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
              alt='Statify-MMA'
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-72 object-cover rounded absolute top-0 left-0 "
            />
            <div className='absolute top-2 left-2 text-xs w-6 h-6 bg-secondary rounded flex items-center justify-center z-10'>
              <FaBolt />
            </div>
            <div className='absolute top-2 right-2 text-sm text-bg px-1  h-6 bg-text rounded flex gap-3 z-10'>
              <span className='flex gap-1 items-center'>
              <FaComments />
              <p>100</p>
              </span>
              <span className='flex gap-1 items-center'>
              <FaHeart />
              <p>100</p>
              </span>
            </div>
          </div>
      )
}

export default TrendingImage