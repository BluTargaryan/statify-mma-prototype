import React from 'react'

const AboutTextBox = ({title, text}: {title: string, text: string}) => {
  return (
    <div className='flex flex-col gap-3'>
        <h2 className='text-xl font-bold font-noto md:text-2xl'>{title}</h2>
        <p>{text}</p>
    </div>
  )
}

export default AboutTextBox