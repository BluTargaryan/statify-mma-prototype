'use client';

import dynamic from 'next/dynamic';
import LatestSection from "./components/Home/sections/LatestSection";
import TrendingSection from "./components/Home/sections/TrendingSection";
import TopPostsByCategorySection from "./components/Home/sections/TopPostsByCategorySection";
import HomeCategoryList from "./components/Home/sections/HomeCategoryList";
import { useContentful } from "./context/ContentfulContext";

// Lazy load AdSpace component
const AdSpace = dynamic(() => import("./components/global/sections/AdSpace"), {
  loading: () => <div className="w-full h-32 bg-gray-200 animate-pulse rounded" />,
  ssr: false
});

export default function PageContainer() {
  const {posts, loading, error } = useContentful();
  console.log(posts)

  if (loading) return (
    <main className="w-full overflow-x-hidden scroll-smooth flex flex-col gap-16 py-8">
      <div className="w-full flex flex-col gap-16 py-8 border-b xl:flex-row xl:gap-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    </main>
  );

  if (error) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-red-500">Error loading content. Please try again later.</div>
    </div>
  );

  return (
    <main className="w-full overflow-x-hidden scroll-smooth flex flex-col gap-16 py-8">
      <div className="w-full flex flex-col gap-16 py-8 border-b xl:flex-row xl:gap-8">
        <LatestSection />
        <TrendingSection />
        <TopPostsByCategorySection />
      </div>
      <AdSpace />
      <HomeCategoryList category="events" />
      <HomeCategoryList category="lists" />
    </main>
  );
}
