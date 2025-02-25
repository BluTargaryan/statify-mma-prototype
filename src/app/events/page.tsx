'use client'

import React, { useEffect, useState } from 'react'
import CategoryPagesList from '../components/global/sections/CategoryPagesList'
import AdSpace from '../components/global/sections/AdSpace'
import Loading from '../components/global/Loading'
const Events = () => {

    const [isLoading, setIsLoading] = useState(true);

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
        <CategoryPagesList category='Events' />
            <AdSpace />
            </>
      )
}

export default Events