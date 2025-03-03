import React from 'react'
import Image from 'next/image'
const AboutImageTextBox = ({title, text}: {title: string, text: string}) => {
  return (
    <div className='flex flex-col gap-4'>
     <Image 
        src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618"
        alt="Commentators" 
        width={0} 
        height={0} 
        sizes="100vw" 
        className='w-full h-40 object-cover rounded md:h-[485px]' 
      />   
      <div className='flex flex-col gap-2'>
        <h3 className='font-bold font-noto'>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default AboutImageTextBox