'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/catalyst/badge'
import { technologies } from '@/components/Constants'

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}

function TechnologyModal({
  description,
  experience,
}: {
  description: string
  experience: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 5 }}
      transition={{ duration: 0.2 }}
      style={{
        position: 'absolute',
        top: `40px`,
        left: `0px`,
      }}
      className="z-[100] w-64 rounded-lg bg-white p-3 shadow-lg ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10"
    >
      <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-200">{experience} YOE</span>
      <p className="text-sm text-wrap text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      <div className="absolute -top-1 left-[8px] h-2 w-2 rotate-45 bg-white ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10" />
    </motion.div>
  )
}

function TechnologyBadge({ feature }: { feature: (typeof technologies)[0] }) {
  const [isHovered, setIsHovered] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const badgeRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false)
    }, 100)
  }

  return (
    <div
      ref={badgeRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Badge color="blue" className="flex-shrink-0 cursor-pointer py-1">
        <feature.icon className="h-4 w-4 text-blue-500" />
        {feature.name}
      </Badge>
      <AnimatePresence>
        {isHovered && (
          <TechnologyModal
            description={feature.description}
            experience={feature.experience}

          />
        )}
      </AnimatePresence>
    </div>
  )
}

export function TechnologiesScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const isMobile = useMediaQuery('(max-width: 768px)')

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth)
    }
  }, [])

  return (
    <div className="relative mt-6 w-full">
      <motion.div
        ref={containerRef}
        className="flex whitespace-nowrap"
        animate={
          isMobile
            ? {
                x: [0, -containerWidth],
              }
            : {}
        }
        transition={
          isMobile
            ? {
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 20,
                  ease: 'linear',
                },
              }
            : {}
        }
      >
        <div className="hidden sm:flex gap-2">
          {technologies.map((feature) => (
            <TechnologyBadge key={feature.name} feature={feature} />
          ))}
        </div>
        {isMobile && (
          <div className="flex sm:hidden gap-2 border">
            {technologies.map((feature) => (
              <TechnologyBadge
                key={`${feature.name}-duplicate`}
                feature={feature}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}
