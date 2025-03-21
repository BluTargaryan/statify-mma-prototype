'use client'
import { notoSerif } from '@/app/utils'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useContentful } from '@/app/context/ContentfulContext'

const TopPostsByCategorySection = () => {
  const router = useRouter()
  const { posts, loading, error } = useContentful();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (error) console.log(error);

  return (
    <div className='w-full flex flex-col gap-8 lg:w-1/4 cursor-pointer'
    onClick={() => router.push('/article/1')}
    >
    <div className='flex items-center justify-between'>
        <h2 className={`text-xl font-bold ${notoSerif.className}`}>Top Posts by Category</h2>
    </div>

    <div className='flex flex-col gap-5 md:flex-row lg:flex-col lg:gap-4'>
        {Array.from(new Set(posts.map(post => post.fields.category))).map(category => (
            <div key={category} className='flex flex-col gap-3'>
                {posts
                    .filter(post => post.fields.category === category)
                    .sort((a, b) => new Date(b.sys.createdAt).getTime() - new Date(a.sys.createdAt).getTime())
                    .slice(0, 2)
                    .map((post: any) => (
                        <div key={post.sys.id} className='flex flex-col gap-1'>
                            <p className={`font-bold md:text-xl ${notoSerif.className}`}>{post.fields.title}</p>
                            <div className='flex gap-4 text-xs md:text-sm'>
                            <p className='font-bold capitalize'>{post.fields.category}</p>
                                <p>{post.sys.createdAt.split('T')[0]}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        ))}
    </div>
</div>
  )
}

export default TopPostsByCategorySection