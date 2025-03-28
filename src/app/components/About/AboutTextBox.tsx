import React from 'react'

interface AboutTextBoxProps {
  title: string;
  text: string;
}

const AboutTextBox = ({ title, text }: AboutTextBoxProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-xl font-bold font-noto md:text-2xl'>{title}</h2>
      <p className='text-base md:text-lg'>{text}</p>
    </div>
  )
}

export default React.memo(AboutTextBox)