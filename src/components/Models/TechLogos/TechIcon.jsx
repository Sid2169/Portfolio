import { Environment, useGLTF, Float, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useEffect } from 'react'
import * as THREE from 'three'

const TechIcon = ({ model }) => {
  const isModel = model.modelPath.endsWith('.glb')

  // Load GLTF only if it's actually a model
  const gltf = isModel ? useGLTF(model.modelPath) : null

  useEffect(() => {
    if (!isModel || !gltf) return

    if (model.name === 'Three JS') {
      gltf.scene.traverse((child) => {
        if (child.isMesh && child.name === 'Object_5') {
          child.material.dispose?.()
          child.material = new THREE.MeshStandardMaterial({ color: 'white' })
        }
      })
    }
  }, [gltf, model.name, isModel])

  // IMAGE CASE
  if (!isModel) {
    return (
      <img
        src={model.modelPath}
        alt={model.name}
        className="w-full h-full object-contain"
      />
    )
  }

  // 3D MODEL CASE
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Environment preset="city" />
      <OrbitControls enableZoom={false} />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={gltf.scene} />
        </group>
      </Float>
    </Canvas>
  )
}

export default TechIcon