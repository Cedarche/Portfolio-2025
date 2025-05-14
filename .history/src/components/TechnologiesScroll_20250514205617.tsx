'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
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
    <div className="mt-6 relative w-full overflow-hidden">
      <motion.div
        ref={containerRef}
        className="flex whitespace-nowrap"
        animate={isMobile ? {
          x: [0, -containerWidth],
        } : {}}
        transition={isMobile ? {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        } : {}}
      >
        <div className="flex gap-2">
          {technologies.map((feature) => (
            <Badge key={feature.name} color="blue" className="py-1 flex-shrink-0">
              <feature.icon
                aria-hidden="true"
                className="h-4 w-4 text-blue-500"
              />
              {feature.name}
            </Badge>
          ))}
        </div>
        {isMobile && (
          <div className="flex gap-2">
            {technologies.map((feature) => (
              <Badge key={`${feature.name}-duplicate`} color="blue" className="py-1 flex-shrink-0">
                <feature.icon
                  aria-hidden="true"
                  className="h-4 w-4 text-blue-500"
                />
                {feature.name}
              </Badge>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
} 