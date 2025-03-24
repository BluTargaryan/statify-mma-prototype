import React from 'react'

const CheckInComp = () => {
  return (
    <section className='w-full h-screen flex items-center mt-28 bg-text/50 justify-center absolute top-0 left-0 z-10'>
        <div className='w-4/5 h-80 bg-bg rounded-lg flex flex-col gap-4 items-center justify-center px-4'>
         <h1 className='text-3xl font-bold font-noto text-center'>Sign up or in via email</h1>
         <p className='text-center'>
         To like or comment on this post, enter your email below.
         </p>
         <p className='text-center'>
         User added successfully
         </p>
         <input type="text" placeholder='Enter your email' className='w-full p-2 rounded-lg border border-text bg-transparent lg:w-1/2' />
         <button className='w-full p-2 rounded-lg bg-text text-bg lg:w-1/2'>Sign up or in</button>
        </div>
    </section>
  )
}

export default CheckInComp