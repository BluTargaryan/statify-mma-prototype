'use client'

import React from 'react'
import Image from 'next/image'
import AboutTextBox from '../components/About/AboutTextBox'
import AboutImageTextBox from '../components/About/AboutImageTextBox'
import { NavSocialsData } from '../inAppData/NavSocialsData'
const About = () => {
  return (
    <main className='py-24 flex flex-col gap-14'>
        <section className='flex flex-col gap-11 items-center'>
    <h1 className='text-3xl font-bold font-noto text-center'>About Statify-MMA</h1>
    <Image 
        src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618"
        alt="Commentators" 
        width={0} 
        height={0} 
        sizes="100vw" 
        className='w-full h-auto object-cover rounded md:h-[485px]' 
      />
        </section>

        <section className='flex flex-col gap-6'>
         <AboutTextBox title='Our Mission' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.' />
         <AboutTextBox title='Our Mission' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.' />
        <div className='flex flex-col gap-6'>
        <h2 className='text-xl font-bold font-noto'>About Us</h2>
          <div className='flex  flex-col gap-8'>
            <AboutImageTextBox title='Our Mission' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.' />
            <AboutImageTextBox title='Our Mission' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.' />
            <AboutImageTextBox title='Our Mission' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.' />
          </div>
        </div>
        </section>
        <p className='text-center font-noto font-bold text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <section className='flex flex-col gap-9 items-center'>
        <div className=' w-4/5 flex justify-between text-3xl'>
        {NavSocialsData.map((social) => (
            <a key={social.id} href={social.href} target='_blank' rel='noopener noreferrer'>
                <social.icon className='hover:text-secondary active:text-primary transition-all duration-300 '
                onClick={() => window.open(social.href, '_blank')}
                />
            </a>
        ))}
        </div>
        
           <button className='bg-text hover:bg-secondary active:bg-primary transition-all duration-300 text-bg hover:text-text active:text-bg rounded w-4/5 h-14'>
            Reach out
           </button>
        </section>
    </main>
  )
}

export default About