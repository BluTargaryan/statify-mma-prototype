import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'
import React from 'react'

const ContactForm = () => {
  return (
    <form className='flex flex-col gap-8 items-center '>
         <div className='flex flex-col gap-2 items-center'>
   <h1 className='text-3xl font-bold font-noto'>Contact Us</h1>
   <p className='text-gray-500'>Reach Out to Us</p>
         </div>
         
         <div className='flex flex-col gap-2 items-center'>
   <h2 className='text-xl font-bold'>Email</h2>
   <Link href='mailto:Hello@statifymma.com'>
   <p className='underline'>Hello@statifymma.com</p>
   </Link>
         </div>

         <div className='flex flex-col gap-8 items-center w-full'>
   <h1 className='text-3xl font-bold font-noto'>Write Us</h1>
  <div className='flex flex-col gap-2 w-full'>
  <input type="text" name="name" id="name" placeholder='Name' className='w-full p-2 rounded-md border border-gray-300 bg-transparent' />
   <input type="email" name="email" id="email" placeholder='Email' className='w-full p-2 rounded-md border border-gray-300 bg-transparent' />
   <textarea name="message" id="message" placeholder='Message' className='w-full p-2 rounded-md border border-gray-300 bg-transparent' />
  </div>
         </div>

         <div className='flex flex-col gap-9 items-center'>
         <div className='flex gap-4 items-center md:w-full md:gap-8'>
     <Checkbox className='w-7 h-7 border-2'/>
      <p className='text-xs text-right'>I allow Statify-MMA to process my personal data provided above.*</p>
    </div>
    <button className='bg-text hover:bg-secondary active:bg-primary transition-all duration-300 text-bg hover:text-text active:text-bg rounded w-full h-14
           md:w-2/5
           xl:w-1/5 xl:text-xl xl:h-14
           '>
            Send message
           </button>
         </div>
    </form>
  )
}

export default ContactForm