import React, { useState } from 'react'
import { useAuth } from '@/app/context/AuthContext'
import { MdClose } from 'react-icons/md'

interface CheckInCompProps {
  isVisible: boolean;
  onClose: () => void;
}

const CheckInComp = ({ isVisible, onClose }: CheckInCompProps) => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const { login } = useAuth()

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true)
      
      if (!email) {
        setStatusMessage('Please enter your email address')
        return
      }

      if (!validateEmail(email)) {
        setStatusMessage('Please enter a valid email address')
        return
      }

      await login(email)
      setStatusMessage('Successfully logged in!')
      onClose()
    } catch (error) {
      setStatusMessage('An error occurred. Please try again.')
      console.error('Login error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isVisible) return null

  return (
    <section className='w-full h-screen flex items-center mt-28 bg-text/50 justify-center absolute top-0 left-0 z-10'>
      <div className='w-4/5 h-80 bg-bg rounded-lg flex flex-col gap-4 items-center justify-center px-4 relative'>
        <MdClose 
          className='absolute top-4 right-4 text-2xl cursor-pointer hover:text-secondary transition-colors'
          onClick={onClose}
        />
        <h1 className='text-3xl font-bold font-noto text-center'>Sign up or in via email</h1>
        <p className='text-center'>
          To like or comment on this post, enter your email below.
        </p>
        {statusMessage && (
          <p className='text-center text-green-600'>
            {statusMessage}
          </p>
        )}
        <input 
          type="email" 
          placeholder='Enter your email' 
          className='w-full p-2 rounded-lg border border-text bg-transparent lg:w-1/2'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button 
          className='w-full p-2 rounded-lg bg-text text-bg lg:w-1/2 hover:bg-secondary transition-colors disabled:opacity-50'
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Signing in...' : 'Sign up or in'}
        </button>
      </div>
    </section>
  )
}

export default CheckInComp