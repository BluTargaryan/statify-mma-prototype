import { notoSerif } from '@/app/utils'
import React from 'react'
import LatestPost from '../localComponents/LatestPost'
import { useContentful } from '@/app/context/ContentfulContext'

const LatestSection = () => {
  const { posts, loading, error } = useContentful();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (error) console.log(error);



  return (
        <section className="w-full flex flex-col gap-6 
        md:gap-8
        xl:w-1/4
        ">
         <h2 className={`${notoSerif.className} text-xl font-bold`}>
          Latest
         </h2>
         <div className='w-full flex flex-col gap-5
         md:flex-row
         xl:flex-col
         '>
          {posts && [...posts]
            .sort((a, b) => new Date(b.sys.createdAt).getTime() - new Date(a.sys.createdAt).getTime())
            .slice(0, 2)
            .map((post: any, index: number) => (
              <LatestPost key={index} post={post} />
            ))}
         </div>
        </section>

  )
}

export default LatestSection