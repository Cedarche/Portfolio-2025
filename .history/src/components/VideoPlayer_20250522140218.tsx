'use client'

import { useEffect, useRef, useState } from 'react'

interface VideoPlayerProps {
  src: string
  className?: string
}

export function VideoPlayer({ src, className = '' }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      if (window.innerWidth > 768) {
        video.play().catch(err => {
          console.error('Error playing video:', err)
          setError('Error playing video')
        })
      }
    }

    const handleError = (e: Event) => {
      console.error('Video error:', e)
      setError('Error loading video')
    }

    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('error', handleError)
    
    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('error', handleError)
    }
  }, [])

  return (
    <div className="relative">
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
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-100 text-red-600 rounded-lg">
          {error}
        </div>
      )}
    </div>
  )
} 