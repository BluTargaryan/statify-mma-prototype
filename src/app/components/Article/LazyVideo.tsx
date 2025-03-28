import React from 'react'

interface LazyVideoProps {
  src: string;
}

const LazyVideo: React.FC<LazyVideoProps> = ({ src }) => {
  return (
    <div className="relative w-full aspect-[16/9]">
      <video
        src={src}
        controls
        className="absolute inset-0 w-full h-full object-cover rounded"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default LazyVideo 