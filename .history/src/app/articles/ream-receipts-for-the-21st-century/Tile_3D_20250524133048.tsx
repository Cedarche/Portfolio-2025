'use client'

import React, { Suspense, useRef, useState } from 'react'
import { Model } from './Model'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei'

export function Tile_3D() {
  const ref = useRef()

  return (
    <div>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ fov: 30 }}
        style={{ flex: 1, minHeight: '400px', background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Stage preset="rembrandt" intensity={0.08} environment="apartment">
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls ref={ref} autoRotate={false} />
      </Canvas>
    </div>
  )
}


