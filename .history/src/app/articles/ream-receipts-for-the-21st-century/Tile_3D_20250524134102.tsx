'use client'

import React, { Suspense, useRef, useState } from 'react'
import { Model } from './Model'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei'

export function Tile_3D() {
  const ref = useRef<any>(null)

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      className="flex min-h-full min-w-full"
    //   style={{ flex: 1, minHeight: '450px', minWidth: '650px', background: 'transparent' }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Suspense fallback={null}>
        <Stage preset="rembrandt" intensity={0.08} environment="apartment">
          <Model />
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} autoRotate={false} />
    </Canvas>
  )
}
