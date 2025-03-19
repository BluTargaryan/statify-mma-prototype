
import { createClient } from 'contentful';

import LatestSection from "./components/Home/sections/LatestSection";
import TrendingSection from "./components/Home/sections/TrendingSection";
import TopPostsByCategorySection from "./components/Home/sections/TopPostsByCategorySection";
import AdSpace from "./components/global/sections/AdSpace";
import HomeCategoryList from "./components/Home/sections/HomeCategoryList";   

export async function getPosts() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
  });
  const data: any = await client.getEntries({
    content_type: 'post',
  });
  console.log({
    items: data.items[0].fields,
  })
}

export default async function PageContainer() {
await getPosts()

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
