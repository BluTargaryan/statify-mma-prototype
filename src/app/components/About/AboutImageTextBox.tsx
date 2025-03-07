import React from 'react'
import Image from 'next/image'
const AboutImageTextBox = ({title, text, reversed, image}: {title: string, text: string, reversed: boolean, image: string}) => {
  return (
    <div className={`flex flex-col gap-4 md:w-full ${reversed ? 'xl:flex-row-reverse' : 'xl:flex-row'} xl:gap-16 xl:items-center`}>
     <Image 
        src={image}
        alt="Commentators" 
        width={0} 
        height={0} 
        sizes="100vw" 
        className='w-full h-40 object-cover object-center rounded md:h-40 xl:h-60' 
      />   
      <div className={`flex flex-col gap-2 ${reversed ? 'xl:items-start' : 'xl:items-end'} xl:w-full`}>
        <h3 className={`font-bold font-noto ${reversed ? 'xl:text-left' : 'xl:text-right'} xl:text-xl`}>{title}</h3>
        <p className={`${reversed ? 'xl:text-left' : 'xl:text-right'}`}>{text}</p>
      </div>
    </div>
  )
}

export default AboutImageTextBox