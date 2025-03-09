import React from 'react'


const Loading = ({className}: {className?: string}) => {
  return (
    <div className={`${className} flex flex-col items-center justify-center bg-bg absolute top-0 left-0 z-50 gap-5 md:gap-7`}>
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-transparent" 
        style={{
          background: 'linear-gradient(#EFEFEF, #EFEFEF) padding-box, linear-gradient(45deg, rgba(128, 128, 128, 0.3) 0%, rgba(128, 128, 128, 0.05) 100%) border-box'
        }}>
      </div>
    </div>
  )
}

export default Loading