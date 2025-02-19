import React from 'react'
import Image from 'next/image'
import { notoSerif } from '@/app/utils'
const NavLogo = () => {
  return (
    <div className='statify-logo flex gap-2 items-center'>
    <Image src='../icon.svg' alt='Statify-MMA'
    width="0"
    height="0"
    sizes="100vw"
    className="h-4 w-auto"
    />
    <h1 className={`${notoSerif.className} text-primary font-bold uppercase`}>Statify-MMA</h1>
  </div>
  )
}

export default NavLogo