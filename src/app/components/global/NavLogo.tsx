import React from 'react'
import Image from 'next/image'
import { notoSerif } from '@/app/utils'
const NavLogo = () => {
  return (
    <div className='statify-logo flex gap-2 items-center
    md:gap-4
    '>
    <Image src='../icon.svg' alt='Statify-MMA'
    width="0"
    height="0"
    sizes="100vw"
    className="h-4 w-auto
    md:h-7
    lg:h-8
    "
    />
    <h1 className={`${notoSerif.className} text-primary font-bold uppercase
      md:text-xl
      `}>Statify-MMA</h1>
  </div>
  )
}

export default NavLogo