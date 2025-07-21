'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'

export default function DiyaModel() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 5]} intensity={1} />
        <Suspense fallback={null}>
          <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
            <sphereGeometry args={[1.2, 32, 32]} />
            <meshStandardMaterial color="orange" emissive="orange" emissiveIntensity={1.2} />
          </mesh>
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  )
}
