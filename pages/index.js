import css from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import OrbitControls from "../components/OrbitControls";
import MySound from '../assets/bg_theme.mp3';
import useSound from 'use-sound';
import { useState } from "react";
import Model from "../components/Model";
import Floor from "../components/Floor";
import {AccumulativeShadows, Box, RandomizedLight} from "@react-three/drei";

export default function Home() {
  const [play, { stop, pause }] = useSound(MySound);
  const [playing, setPlaying] = useState(false);

  return (
    <div className={css.scene}>
      <div
        style={{ cursor: "pointer", position: 'absolute', top: 0, left: 0, width: '100%', textAlign: "center", color: 'white', zIndex: 5 }}
        onClick={() => {
          if (playing) {
            pause();
            setPlaying(false);
          } else {
            play();
            setPlaying(true);
          }
        }}
      >
        {playing ? "Stop" : "Play"}
      </div>
      <Canvas
        shadows
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
          fov: 50,
        }}
      >
        <ambientLight intensity={0.5} />
        <AccumulativeShadows temporal frames={100} color="white" colorBlend={1} toneMapped={true} alphaTest={0.8} opacity={2} scale={12} position={[0, 0, 0]}>
          <RandomizedLight amount={8} radius={4} ambient={0.5} intensity={1} position={[-3,1,3]} bias={0.001} />
        </AccumulativeShadows>
        <Model />
        <Box castShadow receiveShadow position={[-3, 0.5, 1]}>
          <meshStandardMaterial attach="material" color="white" />
        </Box>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
