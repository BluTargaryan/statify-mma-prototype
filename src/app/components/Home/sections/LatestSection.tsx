import { notoSerif } from '@/app/utils'
import React, { useMemo } from 'react'
import LatestPost from '../localComponents/LatestPost'
import { useContentful } from '@/app/context/ContentfulContext'

const LatestSection = () => {
  const { posts, loading, error } = useContentful();

  const latestPosts = useMemo(() => {
    if (!posts) return [];
    return [...posts]
      .sort((a, b) => new Date(b.sys.createdAt).getTime() - new Date(a.sys.createdAt).getTime())
      .slice(0, 2);
  }, [posts]);

  if (loading) return (
    <section className="w-full flex flex-col gap-6 md:gap-8 xl:w-1/4">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded w-1/4"></div>
        <div className="space-y-4">
          <div className="h-32 bg-gray-200 rounded"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    </section>
  );

  if (error) return null;

  return (
    <section className="w-full flex flex-col gap-6 md:gap-8 xl:w-1/4">
      <h2 className={`${notoSerif.className} text-xl font-bold`}>
        Latest
      </h2>
      <div className='w-full flex flex-col gap-5 md:flex-row xl:flex-col'>
        {latestPosts.map((post: any) => (
          <LatestPost key={post.sys.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default React.memo(LatestSection)