'use client'

import { useEffect, useRef } from 'react'

interface VideoPlayerProps {
  src: string
  className?: string
}

export function VideoPlayer({ src, className = '' }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    console.log('Video element mounted:', video)
    console.log('Video source:', src)

    const handleLoadedData = () => {
      console.log('Video loaded successfully')
      if (window.innerWidth > 768) {
        video.play().catch(err => {
          console.error('Error playing video:', err)
        })
      }
    }

    video.addEventListener('loadeddata', handleLoadedData)
    return () => video.removeEventListener('loadeddata', handleLoadedData)
  }, [src])

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className={`w-[300px] rounded-lg shadow-lg ${className}`}
      controls={true}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
} 