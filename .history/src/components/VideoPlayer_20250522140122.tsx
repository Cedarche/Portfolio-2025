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

    const handleLoadedData = () => {
      if (window.innerWidth > 768) {
        video.play()
      }
    }

    video.addEventListener('loadeddata', handleLoadedData)
    return () => video.removeEventListener('loadeddata', handleLoadedData)
  }, [])

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className={`w-full rounded-lg shadow-lg ${className}`}
      controls={false}
    >
      <source src={src} type="video/quicktime" />
      Your browser does not support the video tag.
    </video>
  )
} 