'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/catalyst/badge'
import { technologies } from '@/components/constants'

export function TechnologiesScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

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
        animate={{
          x: [0, -containerWidth],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
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
      </motion.div>
    </div>
  )
} 