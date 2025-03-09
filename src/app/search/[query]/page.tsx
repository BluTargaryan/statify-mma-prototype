'use client'

import React, { useEffect, useState } from 'react'
import AdSpace from '../../components/global/sections/AdSpace'
import CategoryPagesList from '../../components/global/sections/CategoryPagesList'
import Loading from '../../components/global/Loading';
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