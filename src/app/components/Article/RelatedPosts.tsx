import { notoSerif } from '@/app/utils'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import Link from 'next/link'
import CategoryListPost from '../global/CategoryListPost'
import { useContentful } from '@/app/context/ContentfulContext'
const RelatedPosts = ({category, postId}: {category: string, postId: string}) => {
  const {posts, comments} = useContentful()
  const relatedPosts = posts.filter((post: any) => post.fields.category === category)

  return (
    <section className='w-full flex flex-col gap-8'>
        <div className='flex items-center justify-between'>
                <h2 className={`text-xl font-bold ${notoSerif.className}`}>Related Posts</h2>
                <Link href='/events' className='flex items-center gap-3 font-bold hover:gap-4 transition-all duration-300'>
                    <p>View all</p>
                    <FaLongArrowAltRight className='text-2xl' />
                </Link>
            </div>
    
    

              
   
             
    <div className='flex flex-col gap-5 md:grid md:grid-cols-3 xl:grid-cols-5'>
      {relatedPosts.filter((post: any) => post.sys.id !== postId).map((post: any) => (
             <CategoryListPost key={post.sys.id} post={post} comments={comments}/>
      ))}
             </div>
           
    </section>
  )
}

export default RelatedPosts