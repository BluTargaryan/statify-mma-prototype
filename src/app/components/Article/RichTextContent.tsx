import React, { useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'

interface RichTextContentProps {
  content: any[]
}

// Lazy load media components
const LazyVideo = dynamic(() => import('./LazyVideo'), {
  loading: () => <div className="animate-pulse bg-gray-200 w-full h-72 rounded" />
})

const LazyIframe = dynamic(() => import('./LazyIframe'), {
  loading: () => <div className="animate-pulse bg-gray-200 w-full h-72 rounded" />
})

const getYouTubeEmbedUrl = (url: string) => {
  // Handle different YouTube URL formats
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11
    ? `https://www.youtube.com/embed/${match[2]}`
    : null;
};

const RichTextContent: React.FC<RichTextContentProps> = React.memo(({ content }) => {
  // Memoize content processing
  const processedContent = useMemo(() => {
    return content?.map((block: any, blockIndex: number) => {
      if (!block.content) return null;

      if (block.nodeType === 'embedded-asset-block') {
        const fileUrl = block.data.target.fields.file.url;
        const fileType = block.data.target.fields.file.contentType;
        
        if (fileType.startsWith('image/')) {
          return (
            <div key={`image-${blockIndex}`} className="relative w-full aspect-[16/9]">
              <Image 
                src={`https:${fileUrl}`}
                alt={block.data.target.fields.file.fileName}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                className='object-cover object-center rounded'
                quality={85}
                loading="lazy"
              />
            </div>
          )
        } else if (fileType.startsWith('video/')) {
          return (
            <LazyVideo
              key={`video-${blockIndex}`}
              src={`https:${fileUrl}`}
            />
          )
        }
      }
      
      if(block.nodeType.includes('heading')) {
        return <h2 key={`heading-${blockIndex}`}>{block.content.map((item: any) => item.value)}</h2>;
      }

      if (block.nodeType === 'paragraph') {
        return (
          <div key={`paragraph-${blockIndex}`}>
            {block.content
              .filter((item: any) => item.nodeType === 'text')
              .map((item: any, textIndex: number) => {
                const marks = item.marks || [];
                const className = marks.map((mark: any) => {
                  switch(mark.type) {
                    case 'bold': return 'font-bold';
                    case 'italic': return 'italic';
                    case 'underline': return 'underline';
                    default: return '';
                  }
                }).join(' ');
                
                return (
                  <span 
                    key={`text-${blockIndex}-${textIndex}`} 
                    className={className}
                  >
                    {item.value}
                  </span>
                )
              })}
            
            {block.content
              .filter((item: any) => item.nodeType !== 'text')
              .map((item: any, linkIndex: number) => {
                if (item.nodeType === 'hyperlink') {
                  const linkText = item.content[0].value.toLowerCase();
                  const linkUrl = item.data.uri;

                  if (linkText.includes('image')) {
                    return (
                      <div key={`link-image-${blockIndex}-${linkIndex}`} className="relative w-full aspect-[16/9]">
                        <Image 
                          src={linkUrl}
                          alt={linkText}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                          className='object-cover object-center rounded'
                          quality={85}
                          loading="lazy"
                        />
                      </div>
                    );
                  } else if (linkText.includes('video')) {
                    return (
                      <LazyVideo
                        key={`link-video-${blockIndex}-${linkIndex}`}
                        src={linkUrl}
                      />
                    );
                  } else if (linkText.includes('youtube')) {
                    const embedUrl = getYouTubeEmbedUrl(linkUrl);
                    if (embedUrl) {
                      return (
                        <LazyIframe
                          key={`link-youtube-${blockIndex}-${linkIndex}`}
                          src={embedUrl}
                          title={linkText}
                        />
                      );
                    }
                    return (
                      <Link 
                        key={`link-${blockIndex}-${linkIndex}`}
                        href={linkUrl}
                        className='text-secondary font-bold underline'
                      >
                        {linkText}
                      </Link>
                    );
                  } else if (linkText.includes('spotify')) {
                    return (
                      <LazyIframe
                        key={`link-spotify-${blockIndex}-${linkIndex}`}
                        src={linkUrl}
                        title={linkText}
                      />
                    );
                  } else {
                    return (
                      <Link 
                        key={`link-${blockIndex}-${linkIndex}`}
                        href={linkUrl}
                        className='text-secondary font-bold underline'
                      >
                        {linkText}
                      </Link>
                    );
                  }
                }
                return null;
              })}
          </div>
        );
      }
      return null;
    });
  }, [content]);

  return (
    <div className="richtext-edits space-y-1">
      {processedContent}
    </div>
  )
})

RichTextContent.displayName = 'RichTextContent'

export default RichTextContent 