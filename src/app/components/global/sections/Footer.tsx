'use client'

import React from 'react'
import NavLogo from '../NavLogo'
import { notoSerif } from '@/app/utils'
import { Pages } from '@/app/inAppData/pages'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { NavSocialsData } from '@/app/inAppData/NavSocialsData'
import { Checkbox } from "@/components/ui/checkbox"

const Footer = () => {
  const pathname = usePathname()

  return (
    <footer className='w-full py-16 flex flex-col gap-16 items-center'>
        <NavLogo />

        <div className="w-full gap-7 flex flex-col items-center">
      <h3 className={`text-xl font-bold ${notoSerif.className}`}>Pages</h3>
      <ul className="flex flex-col gap-6 items-center">
        {Pages.filter(page => page.pageType === 'page').map(page => (
          <li key={page.id}>
            <Link 
              href={page.href} 
              className={`hover:bg-gray-100 p-2 rounded cursor-pointer gap-2 block
                ${pathname === page.href ? 'font-bold' : 'font-normal'}`}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>


    <div className="w-full gap-7 flex flex-col items-center">
      <h3 className={`text-xl font-bold ${notoSerif.className}`}>Categories</h3>
      <ul className="flex flex-col gap-6 items-center">
        {Pages.filter(page => page.pageType === 'category').map(page => (
          <li key={page.id}>
            <Link 
              href={page.href} 
              className={`hover:bg-gray-100 p-2 rounded cursor-pointer gap-2 block
                ${pathname === page.href ? 'font-bold' : 'font-normal'}`}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    <div className="w-full gap-7 flex flex-col items-center">
    <h3 className={`text-xl font-bold ${notoSerif.className}`}>Socials</h3>
    <div className='flex gap-8 text-2xl
    md:text-2xl md:gap-6
    '>
        {NavSocialsData.map((social) => (
            <a key={social.id} href={social.href} target='_blank' rel='noopener noreferrer'>
                <social.icon className='hover:text-secondary active:text-primary transition-all duration-300 '
                onClick={() => window.open(social.href, '_blank')}
                />
            </a>
        ))}
    </div>
    </div>


    <div className='w-full flex flex-col gap-7 items-center'>
    <h3 className={`text-xl font-bold ${notoSerif.className}`}>Subscribe</h3>

    <div className='flex items-center w-full h-14 gap-5 bg-gray-200 px-4'>
        <input
            type="text" 
            placeholder='Search...' 
            className='w-full h-full bg-transparent focus:outline-none'
        />
        <button className='bg-text hover:bg-secondary active:bg-primary text-bg p-2 rounded'>
          Subscribe
        </button>
    </div>
    <div className='flex gap-4 w-11/12 items-center'>
     <Checkbox className='w-7 h-7 border-text checked:bg-secondary'/>
      <p>By subscribing you agree to our <Link href='/terms' className='underline'>Terms and Conditions</Link></p>
    </div>
    </div>
    </footer>
  )
}

export default Footer