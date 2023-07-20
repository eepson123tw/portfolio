// @ts-nocheck
import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  Environment
} from '@react-three/drei'
import CanvasLoader from '../Loader'

function Ball(props) {
  const [decal] = useTexture([props.imgUrl])
  const BallRef = useRef()
  const [hasClick, setHasClick] = useState(false)

  useFrame((state, delta) => {
    BallRef.current.rotation.y += delta * 0.01
    BallRef.current.rotation.x = BallRef.current.rotation.y
  })

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}></ambientLight>
      <directionalLight position={[0, 0, 0.05]}></directionalLight>
      <Environment preset={'dawn'} blur={1} />
      <mesh
        castShadow
        receiveShadow
        scale={2.5}
        ref={BallRef}
        onClick={() => {
          setHasClick(!hasClick)
        }}
      >
        <sphereGeometry args={[0.75, 64, 64]} />
        <meshStandardMaterial
          color={hasClick ? 'red' : '#fffff8'}
          polygonOffset
          roughness={1}
          polygonOffsetFactor={-5}
          flatShading
        ></meshStandardMaterial>
        <Decal position={[0, 0, 1]} map={decal}></Decal>
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop='always' gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader></CanvasLoader>}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas
