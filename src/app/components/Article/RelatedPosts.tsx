import { notoSerif } from '@/app/utils'
import React, { useMemo } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import Link from 'next/link'
import CategoryListPost from '../global/CategoryListPost'
import { useContentful } from '@/app/context/ContentfulContext'
import ErrorBoundary from '../ErrorBoundary'

interface RelatedPostsProps {
  category: string;
  postId: string;
}

const RelatedPosts: React.FC<RelatedPostsProps> = React.memo(({ category, postId }) => {
  const {posts, comments} = useContentful()

  // Memoize filtered posts
  const relatedPosts = useMemo(() => 
    posts.filter((post: any) => post.fields.category === category && post.sys.id !== postId),
    [posts, category, postId]
  )

  if (!relatedPosts.length) {
    return null
  }

  return (
    <section className='w-full flex flex-col gap-8'>
      <div className='flex items-center justify-between'>
        <h2 className={`text-xl font-bold ${notoSerif.className}`}>Related Posts</h2>
        <Link 
          href='/events' 
          className='flex items-center gap-3 font-bold hover:gap-4 transition-all duration-300'
          prefetch={false}
        >
          <p>View all</p>
          <FaLongArrowAltRight className='text-2xl' />
        </Link>
      </div>
      
      <div className='flex flex-col gap-5 md:grid md:grid-cols-3 xl:grid-cols-5'>
        {relatedPosts.map((post: any) => (
          <ErrorBoundary key={post.sys.id}>
            <CategoryListPost post={post} comments={comments}/>
          </ErrorBoundary>
        ))}
      </div>
    </section>
  )
})

RelatedPosts.displayName = 'RelatedPosts'

export default RelatedPosts