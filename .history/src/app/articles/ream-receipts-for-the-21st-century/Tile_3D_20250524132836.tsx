'use client'

import React, { Suspense, useRef, useState } from 'react'
import { Model } from './Model'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei'

function Tile_3D() {
  const ref = useRef()

  return (
    <div>
      {' '}
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ fov: 30 }}
        style={{ flex: 1, minHeight: '200px', background: 'transparent' }}
      >
        {/* <CameraController /> */}
        {/* <PerspectiveCamera   zoom={0.8} /> */}
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

export default Tile_3D
