'use client'
import React, { useState } from 'react'
import avatarImage from '@/images/Headshot-nobg-small.png'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Silhouette } from '@/components/Silhouette'

function Headshot() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="relative aspect-square w-[90%] overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-tr from-zinc-200 via-zinc-100 to-zinc-100/30 shadow-lg sm:aspect-[0.79] lg:mr-2 lg:w-1/4 dark:border-zinc-700/60 dark:bg-gradient-to-tr dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-600/80">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="h-full w-full"
      >
        <Image
          src={avatarImage}
          alt="Tom Carruthers Headshot"
          className="h-full w-full rounded-2xl object-cover"
          priority
          onLoadingComplete={() => setImageLoaded(true)}
        />
      </motion.div>
      <AnimatePresence>
        {!imageLoaded && (
          <motion.div 
            className="absolute inset-0 z-10 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Silhouette className="scale-[1.29] sm:scale-[1.59] translate-y-[2px] text-blue-400/20 stroke-zinc-400/50 dark:text-blue-300/20 dark:stroke-zinc-100/50" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Headshot
