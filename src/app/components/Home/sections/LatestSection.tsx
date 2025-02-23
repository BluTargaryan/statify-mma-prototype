import { notoSerif } from '@/app/utils'
import React from 'react'
import LatestPost from '../localComponents/LatestPost'

const LatestSection = () => {
  return (
        <section className="w-full flex flex-col gap-6">
         <h2 className={`${notoSerif.className} text-xl font-bold`}>
          Latest
         </h2>
         <div className='w-full flex flex-col gap-5'>
          <LatestPost />
          <LatestPost />
         </div>
        </section>

  )
}

export default LatestSection