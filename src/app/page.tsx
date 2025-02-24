'use client';

import { useState, useEffect } from "react";
import Loading from "./components/global/Loading";
import LatestSection from "./components/Home/sections/LatestSection";
import TrendingSection from "./components/Home/sections/TrendingSection";
import TopPostsByCategorySection from "./components/Home/sections/TopPostsByCategorySection";
import AdSpace from "./components/Home/sections/AdSpace";
import HomeCategoryList from "./components/Home/sections/HomeCategoryList";
export default function PageContainer() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or put your actual data fetching here
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <main className="w-full overflow-x-hidden scroll-smooth flex flex-col gap-16 py-8">
      <div className="w-full flex flex-col gap-16 py-8 border-b lg:flex-row lg:gap-8">
        <LatestSection />
        <TrendingSection />
        <TopPostsByCategorySection />
      </div>
      <AdSpace />
      <HomeCategoryList category='Events' />
      <HomeCategoryList category='Lists' />
    </main>
  );
}
