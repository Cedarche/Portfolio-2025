'use client'

import { useEffect, useRef, useState } from 'react'

interface VideoPlayerProps {
  src: string
  className?: string
}

export function VideoPlayer({ src, className = '' }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoading(false)
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
      setIsLoading(false)
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
        <source src={src.replace('.mov', '.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-600 rounded-lg">
          Loading video...
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-100 text-red-600 rounded-lg">
          {error}
        </div>
      )}
    </div>
  )
} 