import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'

const ContactForm = () => {
  const [isMessageSent, setIsMessageSent] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const sendEmail = async () => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'opeyemiyolo@gmail.com',
          subject: 'New Contact Form Submission',
          text: `Message from ${formData.name}:\n${formData.message}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }
    } catch (error: unknown) {
      console.error('Error sending email:', error);
      throw error;
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      if (!isChecked) {
        setError('Please accept the terms and conditions')
        return
      }

      if (!formData.name || !formData.email || !formData.message) {
        setError('Please fill in all fields')
        return
      }

      await sendEmail()
      setIsMessageSent(true)
      setFormData({ name: '', email: '', message: '' })
      setIsChecked(false)
    } catch (error: unknown) {
      console.error('Error sending email:', error)
      setError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-8 items-center 
    md:w-1/2 md:items-end
    xl:w-2/5
    '>
         <div className='flex flex-col gap-2 items-center md:items-end'>
   <h1 className='text-3xl font-bold font-noto'>Contact Us</h1>
   <p className='text-gray-500'>Reach Out to Us</p>
         </div>
         
         <div className='flex flex-col gap-2 items-center md:items-end'>
   <h2 className='text-xl font-bold'>Email</h2>
   <Link href='mailto:Hello@statifymma.com'>
   <p className='underline'>Hello@statifymma.com</p>
   </Link>
         </div>

         <div className='flex flex-col gap-8 items-center w-full md:items-end'>
   <h1 className='text-3xl font-bold font-noto'>Write Us</h1>
  <div className='flex flex-col gap-2 w-full'>
    {error && (
      <div className='items-center justify-between w-full p-3 rounded-md bg-red-100 text-red-600 flex'>
        <p>{error}</p>
        <MdClose className='text-xl cursor-pointer' onClick={() => setError('')} />
      </div>
    )}
    <div className={`items-center justify-between w-full p-3 rounded-md bg-secondary ${isMessageSent ? 'flex' : 'hidden'}`}>
      <p>Message sent successfully</p>
      <MdClose className='text-xl cursor-pointer' onClick={() => setIsMessageSent(false)} />
    </div>
    <input 
      type="text" 
      name="name" 
      id="name" 
      placeholder='Name' 
      className='w-full p-2 rounded-md border border-gray-300 bg-transparent'
      value={formData.name}
      onChange={handleInputChange}
    />
    <input 
      type="email" 
      name="email" 
      id="email" 
      placeholder='Email' 
      className='w-full p-2 rounded-md border border-gray-300 bg-transparent'
      value={formData.email}
      onChange={handleInputChange}
    />
    <textarea 
      name="message" 
      id="message" 
      placeholder='Message' 
      className='w-full p-2 rounded-md border border-gray-300 bg-transparent'
      value={formData.message}
      onChange={handleInputChange}
    />
  </div>
         </div>

         <div className='flex flex-col gap-9 items-center xl:w-full'>
         <div className='flex justify-between gap-4 items-center md:w-full md:gap-8'>
     <Checkbox 
       className='w-7 h-7 border-2'
       checked={isChecked}
       onCheckedChange={(checked) => setIsChecked(checked === 'indeterminate' ? false : checked)}
     />
      <p className='text-xs text-right'>I allow Statify-MMA to process my personal data provided above.*</p>
    </div>
    <button 
      type="submit"
      className='bg-text hover:bg-secondary active:bg-primary transition-all duration-300 text-bg hover:text-text active:text-bg rounded w-full h-14
             md:w-full
             xl:text-xl xl:h-14
             disabled:opacity-50'
      disabled={isSubmitting}
    >
      {isSubmitting ? 'Sending...' : 'Send message'}
    </button>
         </div>
    </form>
  )
}

export default ContactForm