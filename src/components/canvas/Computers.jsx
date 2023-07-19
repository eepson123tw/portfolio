import React, { Suspense, useEffect, useState, useRef } from 'react'
import { Vector3 } from 'three'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import {
  OrbitControls,
  Preload,
  useGLTF,
  useDepthBuffer,
  SpotLight
} from '@react-three/drei'
import CanvasLoader from '../Loader'
function Computers({ isMobile }) {
  const computer = useGLTF('/desktop_pc/scene.gltf')
  const depthBuffer = useDepthBuffer({ frames: 1 })
  return (
    <>
      <mesh>
        <hemisphereLight intensity={0.15} groundColor='black'></hemisphereLight>
        <pointLight intensity={1}></pointLight>
        <fog attach='fog' args={['#fff', 5, 20]} />
        <MovingSpot
          depthBuffer={depthBuffer}
          color='#fff'
          position={[3, 3, 2]}
        />
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.7 : 0.75}
          position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        ></primitive>
      </mesh>
    </>
  )
}

// @ts-ignore
function MovingSpot({ vec = new Vector3(), ...props }) {
  const light = useRef()
  const viewport = useThree((state) => state.viewport)
  useFrame((state) => {
    // @ts-ignore
    light.current.target.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    )
    // @ts-ignore
    light.current.target.updateMatrixWorld()
  })
  return (
    <SpotLight
      castShadow
      // @ts-ignore
      ref={light}
      penumbra={1}
      distance={6}
      angle={0.35}
      attenuation={5}
      anglePower={4}
      intensity={5}
      shadow-mapSize={1024}
      {...props}
    />
  )
}

//fov view of width
// preserveDrawingBuffer properly render
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    //add a listener
    const mediaQuery = window.matchMedia('(max-width:500px)')
    // set initial value  now is false
    setIsMobile(mediaQuery.matches)
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }
    // when change the media
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    // remove the callback when component unmounted
    return () =>
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
  }, [])
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      frameloop='demand'
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader></CanvasLoader>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
