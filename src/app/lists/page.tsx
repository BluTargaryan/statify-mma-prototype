'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import components with loading states
const CategoryPagesList = dynamic(() => import('../components/global/sections/CategoryPagesList'), {
  loading: () => (
    <div className="w-full flex flex-col gap-6 border-b py-12 md:gap-11">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded w-1/4"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="space-y-3">
              <div className="h-44 bg-gray-200 rounded"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
});

const AdSpace = dynamic(() => import('../components/global/sections/AdSpace'), {
  loading: () => (
    <div className="w-full h-32 bg-gray-200 animate-pulse rounded my-8" />
  ),
  ssr: false
});

const Lists = () => {
  return (
    <main className="w-full py-8">
      <Suspense fallback={
        <div className="w-full flex flex-col gap-6 border-b py-12 md:gap-11">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="space-y-3">
                  <div className="h-44 bg-gray-200 rounded"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }>
        <CategoryPagesList category='lists' />
      </Suspense>
      <Suspense fallback={<div className="w-full h-32 bg-gray-200 animate-pulse rounded my-8" />}>
        <AdSpace />
      </Suspense>
    </main>
  )
}

export default Lists