import { notoSerif } from '@/app/utils'
import React from 'react'
import { posts } from '@/app/inAppData/postData'

const TopPostsByCategorySection = () => {
  return (
    <div className='w-full flex flex-col gap-8 lg:w-1/4'>
    <div className='flex items-center justify-between'>
        <h2 className={`text-xl font-bold ${notoSerif.className}`}>Top Posts by Category</h2>
    </div>

    <div className='flex flex-col gap-5 md:flex-row lg:flex-col lg:gap-4'>
        {posts.slice(0, 3).map((post) => (
            <div key={post.id} className='flex flex-col gap-1'>
                <p className={`font-bold md:text-xl ${notoSerif.className}`}>{post.title}</p>
                <div className='flex gap-4 text-xs md:text-sm'>
                    <p className='font-bold'>{post.category.name}</p>
                    <p>{post.date}</p>
                </div>
            </div>
        ))}
    </div>
</div>
  )
}

export default TopPostsByCategorySection