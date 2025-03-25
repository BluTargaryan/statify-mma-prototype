import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface RichTextContentProps {
  content: any[]
}

const getYouTubeEmbedUrl = (url: string) => {
  // Handle different YouTube URL formats
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11
    ? `https://www.youtube.com/embed/${match[2]}`
    : null;
};

const RichTextContent: React.FC<RichTextContentProps> = ({ content }) => {
  return (
    <div className="richtext-edits">
      {content && content.map((block: any, blockIndex: number) => {
        if (block.content) {
          if (block.nodeType === 'embedded-asset-block') {
            const fileUrl = block.data.target.fields.file.url;
            const fileType = block.data.target.fields.file.contentType;
            
            if (fileType.startsWith('image/')) {
              return <Image 
                key={`image-${blockIndex}`}
                src={`https:${fileUrl}`}
                alt={block.data.target.fields.file.fileName}
                width={0}
                height={0}
                sizes="100vw"
                className='w-full h-72 object-cover object-center rounded md:h-[485px]'
              />
            } else if (fileType.startsWith('video/')) {
              return <video
                key={`video-${blockIndex}`}
                src={`https:${fileUrl}`}
                controls
                className='w-full h-72 object-cover object-center rounded md:h-[485px]'
              >
                Your browser does not support the video tag.
              </video>
            }
          }
          
          if(block.nodeType.includes('heading')) {
            return <h2 key={`heading-${blockIndex}`}>{block.content.map((item: any) => item.value)}</h2>;
          }
          if (block.nodeType === 'paragraph') {
            return (
              <div key={`paragraph-${blockIndex}`}>
                {/* First render text nodes */}
                {block.content
                  .filter((item: any) => item.nodeType === 'text')
                  .map((item: any, textIndex: number) => {
                    if(item.marks.length>0 && item.marks[0].type === 'bold'){
                      return <span key={`text-${blockIndex}-${textIndex}`} className='font-bold'>{item.value}</span>
                    }else if(item.marks.length>0 && item.marks[0].type === 'italic'){
                      return <span key={`text-${blockIndex}-${textIndex}`} className='italic'>{item.value}</span>
                    }else if(item.marks.length>0 && item.marks[0].type === 'underline'){
                      return <span key={`text-${blockIndex}-${textIndex}`} className='underline'>{item.value}</span>
                    }else{
                      return <span key={`text-${blockIndex}-${textIndex}`}>{item.value}</span>
                    }
                  })}
                
                {/* Then render other node types */}
                {block.content
                  .filter((item: any) => item.nodeType !== 'text')
                  .map((item: any, linkIndex: number) => {
                    if (item.nodeType === 'hyperlink') {
                      const linkText = item.content[0].value.toLowerCase();
                      const linkUrl = item.data.uri;

                      if (linkText.toLowerCase().includes('image')) {
                        return <Image 
                          key={`link-image-${blockIndex}-${linkIndex}`}
                          src={linkUrl}
                          alt={linkText}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className='w-full h-72 object-cover object-center rounded md:h-[485px]'
                        />;
                      } else if (linkText.toLowerCase().includes('video')) {
                        return <video
                          key={`link-video-${blockIndex}-${linkIndex}`}
                          src={linkUrl}
                          controls
                          className='w-full h-72 object-cover object-center rounded md:h-[485px]'
                        >
                          Your browser does not support the video tag.
                        </video>;
                      } else if (linkText.toLowerCase().includes('youtube')) {
                        const embedUrl = getYouTubeEmbedUrl(linkUrl);
                        if (embedUrl) {
                          return (
                            <div key={`link-youtube-${blockIndex}-${linkIndex}`} className="relative w-full pt-[56.25%]">
                              <iframe
                                src={embedUrl}
                                title={linkText}
                                className="absolute top-0 left-0 w-full h-full rounded"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                          );
                        }
                        return <Link 
                          key={`link-${blockIndex}-${linkIndex}`}
                          href={linkUrl}
                          className='text-secondary font-bold underline'
                        >
                          {linkText}
                        </Link>;
                      } else if (linkText.toLowerCase().includes('spotify')) {
                        return <iframe
                          key={`link-spotify-${blockIndex}-${linkIndex}`}
                          src={linkUrl}
                          title={linkText}
                          className='w-full h-72 object-cover object-center rounded md:h-[485px]'
                        />
                      } else {
                        return <Link 
                          key={`link-${blockIndex}-${linkIndex}`}
                          href={linkUrl}
                          className='text-secondary font-bold underline'
                        >
                          {linkText}
                        </Link>;
                      }
                    }
                    return null;
                  })}
              </div>
            );
          }
        }
        return null
      })}
    </div>
  )
}

export default RichTextContent 