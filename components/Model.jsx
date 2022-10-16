import React, {useMemo} from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const model = useGLTF("http://localhost:3000/scene.gltf");


  return (
    <primitive object={model.scene} />
  )
}