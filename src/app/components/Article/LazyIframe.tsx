import React from 'react'

interface LazyIframeProps {
  src: string;
  title: string;
}

const LazyIframe: React.FC<LazyIframeProps> = ({ src, title }) => {
  return (
    <div className="relative w-full aspect-[16/9]">
      <iframe
        src={src}
        title={title}
        className="absolute inset-0 w-full h-full rounded"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default LazyIframe 