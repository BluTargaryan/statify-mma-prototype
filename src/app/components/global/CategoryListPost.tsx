import React from 'react'
import CategoryListPostImage from './CategoryListPostImage'
import { notoSerif } from '@/app/utils'

const CategoryListPost = () => {
    return (
        <div className='w-full flex flex-col gap-3'>
          <CategoryListPostImage />
            
            <div className='flex flex-col gap-3 md:gap-2 lg:w-full'>
            <div className='flex gap-4 text-xs '>
                            <p className='font-bold'>Category</p>
                            <p>Mar 2021</p>
                        </div>
                        <h3 className={`${notoSerif.className} font-bold`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</h3>
            
            </div>
           
        </div>
      )
}

export default CategoryListPost