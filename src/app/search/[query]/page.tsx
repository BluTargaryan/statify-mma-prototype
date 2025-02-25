'use client'

import React, { useEffect, useState } from 'react'
import AdSpace from '../../components/global/sections/AdSpace'
import CategoryPagesList from '../../components/global/sections/CategoryPagesList'
import Loading from '../../components/global/Loading';
import { useParams } from 'next/navigation';
const QueryPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams<{ query: string }>();

    useEffect(() => {
      // Simulate loading time or put your actual data fetching here
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000); // 2 seconds loading time
  
      return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />
    }
  return (
    <>
    <CategoryPagesList category={params.query} />
        <AdSpace />
        </>
  )
}

export default QueryPage