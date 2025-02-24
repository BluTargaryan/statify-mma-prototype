import { notoSerif } from '@/app/utils'
import React from 'react'
import ListPostImage from './ListPostImage'

const ListPost = () => {
  return (
    <div className='w-full flex flex-col gap-3 md:flex-row-reverse lg:flex-col'>
      <ListPostImage />
        
        <div className='flex flex-col gap-3 md:w-1/2 md:gap-2 lg:w-full'>
        <div className='flex gap-4 text-xs '>
                        <p className='font-bold'>Category</p>
                        <p>Mar 2021</p>
                    </div>
                    <h3 className={`${notoSerif.className} font-bold`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</h3>
        
        </div>
       
    </div>
  )
}

export default ListPost