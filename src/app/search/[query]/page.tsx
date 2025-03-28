'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation'

// Dynamically import components
const SearchList = dynamic(() => import('../../components/global/SearchList'), {
  loading: () => (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-200 rounded w-1/4"></div>
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-20 bg-gray-200 rounded"></div>
        ))}
      </div>
    </div>
  ),
});

const AdSpace = dynamic(() => import('../../components/global/sections/AdSpace'), {
  loading: () => (
    <div className="animate-pulse h-32 bg-gray-200 rounded"></div>
  ),
});

const QueryPage = () => {
  const params = useParams<{ query: string }>();

  return (
    <main className="w-full py-8 px-4 md:px-8">
      <Suspense fallback={
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-20 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      }>
        <SearchList query={params.query} />
      </Suspense>

      <Suspense fallback={
        <div className="animate-pulse h-32 bg-gray-200 rounded mt-8"></div>
      }>
        <AdSpace />
      </Suspense>
    </main>
  )
}

export default QueryPage