'use client'

import React, { Suspense } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { NavSocialsData } from '../inAppData/NavSocialsData'

// Dynamically import ContactForm component
const ContactForm = dynamic(() => import('../components/Contact/ContactForm'), {
  loading: () => (
    <div className="animate-pulse space-y-4 w-full md:w-2/3">
      <div className="h-10 bg-gray-200 rounded w-1/4"></div>
      <div className="space-y-3">
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-32 bg-gray-200 rounded"></div>
      </div>
    </div>
  ),
});

const ContactUs = () => {
  return (
    <main className='w-full flex flex-col py-16 gap-16 border-b border-gray-200
    md:py-20 md:gap-24
    xl:gap-32'>
      <section className='flex flex-col gap-16 items-center
      md:w-full md:flex-row md:gap-0 md:justify-between'>
        <div className="relative w-full h-[552px] md:w-1/3">
          <Image 
            src="https://images.unsplash.com/photo-1637974013743-82656f7c3f49?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt='MMA fighter jumping' 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
            className='object-cover object-center rounded'
            priority
          />
        </div>
        <Suspense fallback={
          <div className="animate-pulse space-y-4 w-full md:w-2/3">
            <div className="h-10 bg-gray-200 rounded w-1/4"></div>
            <div className="space-y-3">
              <div className="h-10 bg-gray-200 rounded"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
              <div className="h-32 bg-gray-200 rounded"></div>
            </div>
          </div>
        }>
          <ContactForm />
        </Suspense>
      </section>

      <section className='flex flex-col gap-9 items-center xl:gap-10'>
        <h1 className='text-3xl font-bold font-noto text-center xl:text-4xl'>Follow us on Social Media</h1>
        <div className='w-4/5 flex justify-between text-3xl md:w-2/5 xl:w-1/5'>
          {NavSocialsData.map((social) => (
            <a 
              key={social.id} 
              href={social.href} 
              target='_blank' 
              rel='noopener noreferrer'
              className="hover:text-secondary active:text-primary transition-all duration-300"
            >
              <social.icon />
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ContactUs