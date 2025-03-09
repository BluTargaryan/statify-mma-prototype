'use client'

import React, { useState } from 'react'
import { notoSerif } from '@/app/utils'
import { Pages } from '@/app/inAppData/pages'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { NavSocialsData } from '@/app/inAppData/NavSocialsData'
import { Checkbox } from "@/components/ui/checkbox"
import Image from 'next/image'
import FooterIcon from '../../../footericon.png'
import { MdClose } from 'react-icons/md'
const Footer = () => {
  const pathname = usePathname()
  const [isSubscribed, setIsSubscribed] = useState(false)


  return (
    <footer className='w-full py-16 flex flex-col gap-16 items-center md:items-start xl:flex-row'>
       

        <div className='w-full flex flex-col gap-16 items-center  md:flex-row md:items-start md:gap-0 md:justify-between'>

        <Image src={FooterIcon} alt='Statify-MMA'
        width="0"
        height="0"
        sizes="100vw"
        className="h-auto w-52
        md:w-40
        lg:w-44
        "
        />

        <div className="w-full gap-7 flex flex-col items-center md:items-start md:w-auto">
      <h3 className={`text-xl font-bold ${notoSerif.className}`}>Pages</h3>
      <ul className="flex flex-col gap-6 items-center md:items-start">
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


    <div className="w-full gap-7 flex flex-col items-center md:items-start md:w-auto">
      <h3 className={`text-xl font-bold ${notoSerif.className}`}>Categories</h3>
      <ul className="flex flex-col gap-6 items-center md:items-start">
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

    <div className="w-full gap-7 flex flex-col items-center md:items-start md:w-auto">
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
    </div>

    <div className='w-full flex flex-col gap-7 items-center md:w-3/4 md:items-start'>
    <h3 className={`text-xl font-bold ${notoSerif.className}`}>Subscribe</h3>

    <div className={`items-center justify-between w-full p-3 rounded-md bg-secondary ${isSubscribed ? 'flex' : 'hidden'}`}>
  <p>Subscribed successfully</p>
  <MdClose className='text-xl cursor-pointer' onClick={() => setIsSubscribed(false)} />
  </div>

    <div className='flex items-center w-full h-14 gap-5 bg-gray-200 px-4 rounded'>
        <input
            type="text" 
            placeholder='Your email' 
            className='w-full h-full bg-transparent focus:outline-none'
        />
        <button className='bg-text hover:bg-secondary active:bg-primary text-bg p-2 rounded'
        onClick={() => setIsSubscribed(true)}
        >
          Subscribe
        </button>
    </div>
    <div className='flex gap-4 w-11/12 items-center md:w-full md:gap-8'>
     <Checkbox className='w-7 h-7 border-2'/>
      <p>By subscribing you agree to our <Link href='/t-and-cs' className='underline'>Terms and Conditions</Link></p>
    </div>
    </div>
    </footer>
  )
}

export default Footer