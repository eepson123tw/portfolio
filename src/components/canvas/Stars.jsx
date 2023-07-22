// @ts-nocheck
import React, { useState, useRef, Suspense } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import {
  Points,
  PointMaterial,
  Preload,
  Sparkles,
  Environment
} from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
function Stars(props) {
  const ref = useRef()
  const SparklesRef = useRef()
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 })
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
    SparklesRef.current.rotation.x -= (delta / 15) * 0.1
    SparklesRef.current.rotation.y -= (delta / 15) * 0.1
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Sparkles
        ref={SparklesRef}
        size={Math.random() * 6}
        scale={[4, 2, 4]}
        speed={0.02}
        count={100}
        color='#FF8F20'
      ></Sparkles>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#000'
          size={0.005}
          thickness={1}
          anisotropy={1}
          sizeAttenuation={true}
          depthWrite={false}
        ></PointMaterial>
      </Points>
    </group>
  )
}

export default function StarsCanvas() {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Environment preset='city' />
        <Suspense fallback={null}>
          <Stars></Stars>
          <Preload all></Preload>
        </Suspense>
      </Canvas>
    </div>
  )
}
