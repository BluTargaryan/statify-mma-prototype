import { notoSerif } from '@/app/utils'
import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import ListPost from '../localComponents/ListPost'
const HomeCategoryList = ({category}: {category: string}) => {
  return (
    <div className='w-full flex flex-col gap-6'>
<div className='flex items-center justify-between'>
            <h2 className={`text-xl font-bold ${notoSerif.className}`}>{category}</h2>
            <Link href='/events' className='flex items-center gap-3 font-bold hover:gap-4 transition-all duration-300'>
                <p>View all</p>
                <FaLongArrowAltRight className='text-2xl' />
            </Link>
        </div>


        <div className='w-full flex flex-col gap-5'>
         <ListPost />
         <ListPost />
         <ListPost />
         <ListPost />
         <ListPost />
        </div>
    </div>
  )
}

export default HomeCategoryList