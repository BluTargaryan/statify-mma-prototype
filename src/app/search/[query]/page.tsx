'use client'

import React from 'react'
import AdSpace from '../../components/global/sections/AdSpace'
import CategoryPagesList from '../../components/global/sections/CategoryPagesList'
import { useParams } from 'next/navigation';
const QueryPage = () => {
    const params = useParams<{ query: string }>();

  return (
    <>
    <CategoryPagesList category={params.query} />
        <AdSpace />
        </>
  )
}

export default QueryPage