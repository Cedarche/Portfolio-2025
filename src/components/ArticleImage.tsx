'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface ArticleImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

function ArticleImage({ src, alt, className = '', priority = false }: ArticleImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <AnimatePresence>
        {!imageLoaded && (
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
      <Image
        src={src}
        alt={alt}
        className={` ${className}`}
        priority={priority}
        onLoadingComplete={() => setImageLoaded(true)}
      />
    </div>
  )
}

export default ArticleImage