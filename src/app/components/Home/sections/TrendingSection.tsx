import React, { useMemo } from 'react'
import { notoSerif } from '@/app/utils'
import TrendingPost from '../localComponents/TrendingPost'
import { useContentful } from "@/app/context/ContentfulContext";

const TrendingSection = () => {
  const { posts, loading, error } = useContentful();

  const trendingPost = useMemo(() => {
    if (!posts) return [];
    return posts
      .sort((a, b) => b.fields.likesCount - a.fields.likesCount)
      .slice(0, 1);
  }, [posts]);

  if (loading) return (
    <section className="w-full flex flex-col gap-6 xl:w-1/2">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded w-1/4"></div>
        <div className="h-64 bg-gray-200 rounded"></div>
      </div>
    </section>
  );

  if (error) return null;

  return (
    <section className="w-full flex flex-col gap-6 xl:w-1/2">
      <h2 className={`${notoSerif.className} text-xl font-bold`}>
        Trending
      </h2>
      {trendingPost.map((post: any) => (
        <TrendingPost key={post.sys.id} trendingPost={post} />
      ))}
    </section>
  );
}

export default React.memo(TrendingSection)