'use client'
import { notoSerif } from '@/app/utils'
import React, { useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { useContentful } from '@/app/context/ContentfulContext'

const TopPostsByCategorySection = () => {
  const router = useRouter()
  const { posts, loading, error } = useContentful();

  const postsByCategory = useMemo(() => {
    if (!posts) return [];
    const categories = Array.from(new Set(posts.map(post => post.fields.category)));
    return categories.map(category => ({
      category,
      posts: posts
        .filter(post => post.fields.category === category)
        .sort((a, b) => new Date(b.sys.createdAt).getTime() - new Date(a.sys.createdAt).getTime())
        .slice(0, 2)
    }));
  }, [posts]);

  if (loading) return (
    <div className='w-full flex flex-col gap-8 xl:w-1/4'>
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded w-1/2"></div>
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (error) return null;

  return (
    <div className='w-full flex flex-col gap-8 xl:w-1/4'>
      <div className='flex items-center justify-between'>
        <h2 className={`text-xl font-bold ${notoSerif.className}`}>Top Posts by Category</h2>
      </div>

      <div className='flex flex-col gap-5 md:flex-row xl:flex-col xl:gap-4'>
        {postsByCategory.map(({ category, posts }) => (
          <div key={category} className='flex flex-col gap-3'>
            {posts.map((post: any) => (
              <div 
                key={post.sys.id} 
                className='flex flex-col gap-1 cursor-pointer' 
                onClick={() => router.push(`/article/${post.sys.id}`)}
              >
                <p className={`font-bold md:text-xl ${notoSerif.className}`}>{post.fields.title}</p>
                <div className='flex gap-4 text-xs md:text-sm'>
                  <p className='font-bold capitalize'>{post.fields.category}</p>
                  <p>{post.sys.createdAt.split('T')[0]}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(TopPostsByCategorySection)