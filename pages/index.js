import { Suspense } from 'react';
import css from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import Model from "../components/Model";
import {AccumulativeShadows, Box, Html, OrbitControls, RandomizedLight, useProgress} from "@react-three/drei";

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return <Html center style={{fontSize: '30px'}}>{progress.toFixed(2)} % loaded</Html>
}


export default function Home() {

  return (
    <div className={css.scene}>
      <Canvas
        shadows
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
          fov: 50,
        }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <AccumulativeShadows temporal frames={100} color="white" colorBlend={1} toneMapped={true} alphaTest={0.8} opacity={2} scale={12} position={[0, 0, 0]}>
            <RandomizedLight amount={8} radius={4} ambient={0.5} intensity={1} position={[-3,1,3]} bias={0.001} />
          </AccumulativeShadows>
          <Model />
          <Box castShadow receiveShadow position={[-3, 0.5, 1]}>
            <meshStandardMaterial attach="material" color="white" />
          </Box>
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}
