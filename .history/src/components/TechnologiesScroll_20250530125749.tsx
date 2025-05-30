'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SiTypescript, SiJavascript, SiTailwindcss, SiStyledcomponents, SiGooglecloud } from 'react-icons/si'
import { FaReact, FaPython, FaNodeJs, FaAws } from 'react-icons/fa'
import { CgCPlusPlus } from 'react-icons/cg'
import { IoLogoFirebase } from 'react-icons/io5'

interface TechItem {
  name: string
  icon: string
  description?: string
  experience?: string
}

interface TechScrollProps {
  items: TechItem[]
  showTooltip?: boolean
  className?: string
}

const iconMap = {
  'Typescript': SiTypescript,
  'Javascript': SiJavascript,
  'Python': FaPython,
  'C++': CgCPlusPlus,
  'React': FaReact,
  'React Native': FaReact,
  'Node.js': FaNodeJs,
  'Firebase': IoLogoFirebase,
  'AWS': FaAws,
  'GCP': SiGooglecloud,
  'Tailwind': SiTailwindcss,
  'Styled Components': SiStyledcomponents,
}

function TechnologyModal({ feature, onClose }: { feature: TechItem; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Close</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50">
            {iconMap[feature.icon as keyof typeof iconMap] && (
              <div className="h-6 w-6 text-gray-600">
                {iconMap[feature.icon as keyof typeof iconMap]()}
              </div>
            )}
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
            {feature.experience && (
              <p className="text-sm text-gray-500">{feature.experience} years experience</p>
            )}
          </div>
        </div>
        {feature.description && (
          <p className="mt-4 text-gray-600">{feature.description}</p>
        )}
      </div>
    </div>
  )
}

function TechnologyBadge({ feature, onClick }: { feature: TechItem; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative flex items-center gap-2 rounded-full bg-gray-50 px-3 py-1 text-sm font-medium text-gray-600 hover:bg-gray-100"
    >
      <div className="h-4 w-4 text-gray-400 group-hover:text-gray-500">
        {iconMap[feature.icon as keyof typeof iconMap] && iconMap[feature.icon as keyof typeof iconMap]()}
      </div>
      {feature.name}
    </button>
  )
}

export default function TechnologiesScroll({ items, showTooltip = true, className = '' }: TechScrollProps) {
  const [selectedFeature, setSelectedFeature] = useState<TechItem | null>(null)

  return (
    <div className={`relative ${className}`}>
      <div className="flex flex-wrap gap-2">
        {items.map((feature) => (
          <TechnologyBadge
            key={feature.name}
            feature={feature}
            onClick={showTooltip ? () => setSelectedFeature(feature) : undefined}
          />
        ))}
      </div>
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TechnologyModal
              feature={selectedFeature}
              onClose={() => setSelectedFeature(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
