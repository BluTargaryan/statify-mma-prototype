'use client';

import LatestSection from "./components/Home/sections/LatestSection";
import TrendingSection from "./components/Home/sections/TrendingSection";
import TopPostsByCategorySection from "./components/Home/sections/TopPostsByCategorySection";
import AdSpace from "./components/global/sections/AdSpace";
import HomeCategoryList from "./components/Home/sections/HomeCategoryList";
import { useContentful } from "./context/ContentfulContext";

export default function PageContainer() {
  const { posts, comments, loading, error } = useContentful();

  if (loading) console.log('Loading...');
  if (error) console.log('Error: ', error);

  if (posts.length > 0) {
    console.log('Posts: ', posts);
  }

  if (comments.length > 0) {
    console.log('Comments: ', comments);
  }

  return (
    <main className="w-full overflow-x-hidden scroll-smooth flex flex-col gap-16 py-8">
      <div className="w-full flex flex-col gap-16 py-8 border-b lg:flex-row lg:gap-8">
        <LatestSection />
        <TrendingSection />
        <TopPostsByCategorySection />
      </div>
      <AdSpace />
      <HomeCategoryList category="Events" />
      <HomeCategoryList category="Lists" />
    </main>
  );
}
