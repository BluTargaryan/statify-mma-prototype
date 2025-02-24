import React from 'react'
import { notoSerif } from '@/app/utils'
import TrendingPost from '../localComponents/TrendingPost'
const TrendingSection = () => {
  return (
        <section className="w-full flex flex-col gap-6 lg:w-1/2">
         <h2 className={`${notoSerif.className} text-xl font-bold`}>
          Trending
         </h2>
            <TrendingPost />
        </section>

  )
}

export default TrendingSection