'use client';

import React, { useMemo } from 'react'
import { notoSerif } from '@/app/utils'
import { useContentful } from '@/app/context/ContentfulContext'

import CategoryListPost from '../CategoryListPost'


const CategoryPagesList = ({category}: {category: string}) => {
  const {posts, comments} = useContentful()

  const filteredPosts = useMemo(() => {
    if (!posts) return [];
    return posts.filter((post: any) => post.fields.category === category);
  }, [posts, category]);

  if (!filteredPosts.length) {
    return (
      <section className='w-full flex flex-col gap-6 border-b py-12 md:gap-11'>
        <h2 className={`text-xl font-bold ${notoSerif.className} capitalize`}>{category}</h2>
        <div className="text-center py-8">
          No posts found in this category.
        </div>
      </section>
    );
  }

  return (
    <section className='w-full flex flex-col gap-6 border-b py-12 md:gap-11'>
      <h2 className={`text-xl font-bold ${notoSerif.className} capitalize`}>{category}</h2>
      <div className='flex flex-col gap-5 md:grid md:grid-cols-3 lg:grid-cols-5'>
        {filteredPosts.map((post: any) => (
          <CategoryListPost 
            key={post.sys.id}
            post={post}
            comments={comments}
          />
        ))}
      </div>
    </section>
  )
}

export default React.memo(CategoryPagesList)