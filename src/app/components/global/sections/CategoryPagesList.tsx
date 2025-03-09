import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { notoSerif } from '@/app/utils'
import Link from 'next/link'
import CategoryListPost from '../CategoryListPost'
const CategoryPagesList = ({category}: {category: string}) => {
    return (
        <section className='w-full flex flex-col gap-6 border-b py-12 md:gap-11'>

                <h2 className={`text-xl font-bold ${notoSerif.className}`}>{category}</h2>
    
    

              
   
             
    <div className='flex flex-col gap-5 md:grid md:grid-cols-3 lg:grid-cols-5'>
             <CategoryListPost />
             <CategoryListPost />
             <CategoryListPost />
             <CategoryListPost />
             <CategoryListPost />
             <CategoryListPost />
             <CategoryListPost />
             <CategoryListPost />
             <CategoryListPost />
             <CategoryListPost />
             <CategoryListPost />
             <CategoryListPost />
             </div>
           
        </section>
      )
}

export default CategoryPagesList