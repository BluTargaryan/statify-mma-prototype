'use client'

import React from 'react'
import Image from 'next/image'
import AboutTextBox from '../components/About/AboutTextBox'
import AboutImageTextBox from '../components/About/AboutImageTextBox'
import { NavSocialsData } from '../inAppData/NavSocialsData'
import { useRouter } from 'next/navigation'

const About = () => {
  const router = useRouter()
  return (
    <main className='py-24 flex flex-col gap-14 md:gap-20'>
        <section className='flex flex-col gap-11 items-center'>
          <h1 className='text-3xl font-bold font-noto text-center md:text-4xl'>About Statify-MMA</h1>
          <Image 
              src="https://images.unsplash.com/photo-1733951109839-f194ccd78cec"
              alt="MMA fighters in action" 
              width={0} 
              height={0} 
              sizes="100vw" 
              className='w-full h-auto object-cover object-center rounded md:h-[485px] xl:h-[526px]' 
          />
        </section>

        <section className='flex flex-col gap-6 xl:gap-12 xl:w-4/5 xl:mx-auto'>
          <AboutTextBox 
            title='About Us' 
            text='At StatifyMMA.com, we are dedicated to transforming the way Mixed Martial Arts is analyzed and appreciated. Our platform was founded by a fervent MMA enthusiast and college student, driven by a vision to elevate the sport through precise data analysis and statistical insights.' 
          />
          
          <AboutTextBox 
            title='Our Mission' 
            text='Our mission is to bridge the gap between the excitement of the fight and the analytical depth it deserves. By combining a passion for MMA with a meticulous approach to data, we strive to offer the MMA community unparalleled insights that enhance understanding and foster a deeper appreciation for the sport.' 
          />

          <div className='flex flex-col gap-6 xl:gap-12'>
            <h2 className='text-xl font-bold font-noto md:text-2xl'>What We Offer</h2>
            <div className='flex flex-col gap-8 md:flex-row md:gap-7 xl:flex-col'>
              <AboutImageTextBox 
                title='In-Depth Analysis' 
                text="We provide comprehensive statistical breakdowns of fighters' performances, fight trends, and match outcomes."
                image="https://images.unsplash.com/photo-1622599518895-be813cc42628"
                reversed={false} 
              />
              <AboutImageTextBox 
                title='Enhanced Understanding' 
                text='Our data-driven insights help fans and professionals alike to grasp the intricacies of MMA, from strategy and technique to performance metrics.'
                image="https://images.unsplash.com/photo-1591978638709-bd73f437243d"
                reversed={true} 
              />
              <AboutImageTextBox 
                title='Passionate Expertise' 
                text='Our team brings a unique blend of enthusiasm and analytical expertise, ensuring that every piece of data we present is both accurate and insightful.'
                image="https://images.unsplash.com/photo-1611816153260-815a15a0993d"
                reversed={false} 
              />
            </div>
          </div>
        </section>

        <p className='text-center font-noto font-bold text-xl md:w-3/5 md:mx-auto xl:w-4/5 xl:mx-auto xl:text-3xl'>
          Join us on this journey as we explore the world of MMA through the lens of data, offering fresh perspectives and detailed analyses that contribute to a richer understanding of the sport we love.
        </p>

        <section className='flex flex-col gap-9 items-center xl:w-4/5 xl:mx-auto xl:gap-12'>
          <div className='w-4/5 flex justify-between text-3xl md:w-2/5 xl:w-1/5'>
            {NavSocialsData.map((social) => (
              <a key={social.id} href={social.href} target='_blank' rel='noopener noreferrer'>
                <social.icon 
                  className='hover:text-secondary active:text-primary transition-all duration-300'
                  onClick={() => window.open(social.href, '_blank')}
                />
              </a>
            ))}
          </div>
          
          <button onClick={() => router.push('/contact')} className='bg-text hover:bg-secondary active:bg-primary transition-all duration-300 text-bg hover:text-text active:text-bg rounded w-4/5 h-14 md:w-2/5 xl:w-1/5 xl:text-xl xl:h-14'>
            Reach out
          </button>
        </section>
    </main>
  )
}

export default About