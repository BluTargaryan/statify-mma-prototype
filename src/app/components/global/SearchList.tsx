import React from 'react'
import CategoryListPost from './CategoryListPost'
import { notoSerif } from '@/app/utils'
import { useContentful } from '@/app/context/ContentfulContext'

const SearchList = ({query}: {query: string}) => {

    const {posts, comments}= useContentful()
      return (
          <section className='w-full flex flex-col gap-6 border-b py-12 md:gap-11'>
  
                  <h2 className={`text-xl font-bold ${notoSerif.className} capitalize`}>{query}</h2>
      
      
  
                
     
               
      <div className='flex flex-col gap-5 md:grid md:grid-cols-3 lg:grid-cols-5'>
               {posts && posts
                 .filter((post: any) => post.fields.title.toLowerCase().includes(decodeURIComponent(query).toLowerCase()))
                 .map((post: any, index: number) => (
                   <CategoryListPost 
                     key={index}
                     post={post}
                     comments={comments}
                   />
                 ))}
               </div>
             
          </section>
        )
  }

export default SearchList