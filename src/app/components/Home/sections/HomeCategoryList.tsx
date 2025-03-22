import { notoSerif } from '@/app/utils'
import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import ListPost from '../localComponents/ListPost'
import TrendingListPost from '../localComponents/TrendingListPost'
import { useContentful } from '@/app/context/ContentfulContext'     
const HomeCategoryList = ({category}: {category: string}) => {
  const { posts } = useContentful();
  const filteredPosts = posts.filter(post => post.fields.category === category);
  const trendingPost = filteredPosts.sort((a, b) => b.fields.likesCount - a.fields.likesCount).slice(0, 1);
  const listPosts = filteredPosts.slice(0, 4);
  return (
    <div className='w-full flex flex-col gap-6 border-b py-12 md:gap-11'>
<div className='flex items-center justify-between'>
            <h2 className={`text-xl font-bold ${notoSerif.className} capitalize`}>{category}</h2>
            <Link href='/events' className='flex items-center gap-3 font-bold hover:gap-4 transition-all duration-300'>
                <p>View all</p>
                <FaLongArrowAltRight className='text-2xl' />
            </Link>
        </div>


        <div className='w-full flex flex-col gap-5 md:flex-row'>
          
{trendingPost.length > 0 && <TrendingListPost trendingPost={trendingPost[0]} />}
         
<div className='flex flex-col gap-5 md:w-1/2  lg:grid lg:grid-cols-2'>
         {listPosts.map((post) => (
         <ListPost key={post.sys.id} post={post} />
         ))}  
         </div>
        </div>
    </div>
  )
}

export default HomeCategoryList