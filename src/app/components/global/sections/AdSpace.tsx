import React from 'react'
import { useContentful } from '@/app/context/ContentfulContext'
import Image from 'next/image'
const AdSpace = () => {
  const { ads, loading, error } = useContentful();

  const activeAd = ads.find(ad => ad.fields.status === true);
  const mobileAd = activeAd?.fields.mobileImage.fields.file.url;
  const tabAd = activeAd?.fields.tabImage.fields.file.url;
  const desktopAd = activeAd?.fields.image.fields.file.url;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <section className='w-full py-14 flex items-center justify-center border-b '>
        {
          activeAd && (
            <div 
            className={`w-full h-[337px] flex items-center justify-center bg-text rounded overflow-hidden
            md:h-[204px]
            xl:w-4/5
            ${activeAd.fields.link ? 'cursor-pointer' : ''}`}
            onClick={() => activeAd.fields.link && window.open(activeAd.fields.link, '_blank')}
            >
              <Image 
              src={`https:${mobileAd}`}
              alt='ad' 
              width={0} 
              height={0} 
              sizes='100vw'
              className='w-auto h-[90%] object-cover 
              md:hidden'
              />
              <Image
              src={`https:${tabAd}`}
              alt='ad'
              width={0}
              height={0} 
              sizes='100vw'
              className='hidden w-auto h-[90%] object-cover
              md:block xl:hidden'
              />
              <Image
              src={`https:${desktopAd}`}
              alt='ad'
              width={0}
              height={0}
              sizes='100vw' 
              className='hidden w-auto h-[90%] object-cover
              xl:block'
              />
            </div>
          )
        }
    </section>
  )
}

export default AdSpace