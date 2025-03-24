'use client'

import React from 'react'
import AdSpace from '../../components/global/sections/AdSpace'
import SearchList from '../../components/global/SearchList'
import { useParams } from 'next/navigation';
const QueryPage = () => {
    const params = useParams<{ query: string }>();

  return (
    <>
    <SearchList query={params.query} />
        <AdSpace />
        </>
  )
}

export default QueryPage