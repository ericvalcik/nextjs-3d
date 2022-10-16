import React, {useLayoutEffect, useMemo} from 'react'
import { useGLTF } from '@react-three/drei'
import {applyProps} from "@react-three/fiber";

export default function Model(props) {
  const { scene, materials } = useGLTF("https://nextjs-3d.vercel.app/scene.gltf");
  useLayoutEffect(() => {
    scene.traverse((obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true))
  })
  return <primitive object={scene} {...props} />
}