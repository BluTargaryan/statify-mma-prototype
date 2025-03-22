import React from 'react'
import { notoSerif } from '@/app/utils'
import TrendingPost from '../localComponents/TrendingPost'
import { useContentful } from "@/app/context/ContentfulContext";

const TrendingSection = () => {
  const { posts, loading, error } = useContentful();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (error) console.log(error);

  const trendingPost = posts.sort((a, b) => b.fields.likesCount - a.fields.likesCount).slice(0, 1);

  return (
        <section className="w-full flex flex-col gap-6 xl:w-1/2">
         <h2 className={`${notoSerif.className} text-xl font-bold`}>
          Trending
         </h2>
         {trendingPost.map((post: any) => (
            <TrendingPost key={post.sys.id} trendingPost={post} />
         ))}
        </section>

  )
}

export default TrendingSection