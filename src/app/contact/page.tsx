'use client'

import React from 'react'
import Image from 'next/image'
import ContactForm from '../components/Contact/ContactForm'
import { NavSocialsData } from '../inAppData/NavSocialsData'
const ContactUs = () => {
  return (
    <main className='w-full flex flex-col py-16 gap-16 border-b border-gray-200
    md:py-20 md:gap-24
    xl:gap-32
    '>
      <section className='flex flex-col gap-16 items-center
      md:w-full md:flex-row md:gap-0 md:justify-between
      '>
      
        <Image 
        src="https://images.unsplash.com/photo-1637974013743-82656f7c3f49?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt='MMA fighter jumping' 
        width={0}
        height={0}
        sizes='100vw'
        className='w-full h-[552px] object-cover rounded
        md:w-1/3
        '
        />
        <ContactForm />
        </section>
        <section className='flex flex-col gap-9 items-center xl:gap-10'>
        <h1 className='text-3xl font-bold font-noto text-center xl:text-4xl'>Follow us on Social Media</h1>
        <div className=' w-4/5 flex justify-between text-3xl md:w-2/5 xl:w-1/5'>
        {NavSocialsData.map((social) => (
            <a key={social.id} href={social.href} target='_blank' rel='noopener noreferrer'>
                <social.icon className='hover:text-secondary active:text-primary transition-all duration-300 '
                onClick={() => window.open(social.href, '_blank')}
                />
            </a>
        ))}
        </div>
        </section>
    </main>
  )
}

export default ContactUs