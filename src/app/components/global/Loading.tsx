import React from 'react'
import { notoSerif } from '@/app/utils'

const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-5 md:gap-7">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-transparent" 
        style={{
          background: 'linear-gradient(#EFEFEF, #EFEFEF) padding-box, linear-gradient(45deg, rgba(226, 143, 42, 1) 0%, rgba(226, 143, 42, 0.13) 100%) border-box'
        }}>
      </div>
      <h1 className={`${notoSerif.className} text-3xl font-semibold text-primary md:text-4xl`}>STATIFY-MMA</h1>
    </div>
  )
}

export default Loading