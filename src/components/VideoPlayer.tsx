'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface VideoPlayerProps {
  src: string
  className?: string
}

export function VideoPlayer({ src, className = '' }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    console.log('Video element mounted:', video)
    console.log('Video source:', src)

    const handleLoadedData = () => {
      console.log('Video loaded successfully')
      setVideoLoaded(true)
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
    <div className="relative overflow-hidden rounded-2xl">
      <AnimatePresence>
        {!videoLoaded && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-zinc-200 via-zinc-100 to-zinc-100/30 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-600/80"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={`w-[300px] rounded-2xl shadow-lg ${className}`}
        controls={true}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
} 