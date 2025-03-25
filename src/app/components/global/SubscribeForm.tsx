'use client'

import React, { useState } from 'react'
import { notoSerif } from '@/app/utils'
import Link from 'next/link'
import { Checkbox } from "@/components/ui/checkbox"
import { MdClose } from 'react-icons/md'
import { useAuth } from '@/app/context/AuthContext'

const SubscribeForm = () => {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [email, setEmail] = useState('')
  const [statusMessage, setStatusMessage] = useState('')
  const [showStatus, setShowStatus] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { login} = useAuth()

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // const createUserInContentful = async (email: string) => {
  //   const client = createClient({
  //     accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_TOKEN || '',
  //   })

  //   const space = await client.getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '')
  //   const environment = await space.getEnvironment(process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || '')

  //   // Check if user already exists
  //   const entries = await environment.getEntries({
  //     content_type: 'user',
  //     'fields.email[match]': email,
  //   })

  //   if (entries.items.length > 0) {
  //     // If user exists but not logged in, we'll just log them in
  //     if (!user) {
  //       return entries.items[0]
  //     }
  //     throw new Error('This email is already subscribed')
  //   }

  //   // Create new user entry
  //   const entry = await environment.createEntry('user', {
  //     fields: {
  //       email: {
  //         'en-US': email
  //       },
  //     }
  //   })

  //   // Publish the entry
  //   await entry.publish()
  //   return entry
  // }

  const handleSubscribe = async () => {
    try {
      setIsSubmitting(true)
      setShowStatus(true)
      
      // Validate checkbox
      if (!isChecked) {
        setStatusMessage('Please accept the Terms and Conditions')
        setIsSubscribed(false)
        return
      }

      // Validate email
      if (!email) {
        setStatusMessage('Please enter your email address')
        setIsSubscribed(false)
        return
      }

      if (!validateEmail(email)) {
        setStatusMessage('Please enter a valid email address')
        setIsSubscribed(false)
        return
      }

      // Create user in Contentful and log them in
      // const userData = await createUserInContentful(email)
      await login(email) // This will handle the session management
      
      setStatusMessage('Successfully subscribed and logged in!')
      setIsSubscribed(true)
      setEmail('')
      setIsChecked(false)
    } catch (error) {
      if (error instanceof Error && error.message === 'This email is already subscribed') {
        setStatusMessage('This email is already subscribed to our newsletter')
      } else {
        setStatusMessage('An error occurred. Please try again.')
        console.error('Subscription error:', error)
      }
      setIsSubscribed(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='w-full flex flex-col gap-7 items-center md:w-3/4 md:items-start'>
      <h3 className={`text-xl font-bold ${notoSerif.className}`}>Subscribe</h3>

      <div className={`items-center justify-between w-full p-3 rounded-md ${isSubscribed ? 'bg-green-100' : 'bg-secondary'} ${showStatus ? 'flex' : 'hidden'}`}>
        <p>{statusMessage}</p>
        <MdClose className='text-xl cursor-pointer' onClick={() => setShowStatus(false)} />
      </div>

      <div className='flex items-center w-full h-14 gap-5 bg-gray-200 px-4 rounded'>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Your email'
          className='w-full h-full bg-transparent focus:outline-none'
        />
        <button 
          className={`bg-text hover:bg-secondary active:bg-primary text-bg p-2 rounded ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleSubscribe}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>

      <div className='flex gap-4 w-11/12 items-center md:w-full md:gap-8'>
        <Checkbox 
          className='w-7 h-7 border-2' 
          checked={isChecked} 
          onCheckedChange={(checked) => setIsChecked(checked === 'indeterminate' ? false : checked)} 
        />
        <p>By subscribing you agree to our <Link href='/t-and-cs' className='underline'>Terms and Conditions</Link></p>
      </div>
    </div>
  )
}

export default SubscribeForm 