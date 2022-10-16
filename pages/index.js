import css from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import OrbitControls from "../components/OrbitControls";
import MySound from '../assets/bg_theme.mp3';
import useSound from 'use-sound';
import { useState } from "react";
import Model from "../components/Model";
import Floor from "../components/Floor";
import {Box} from "@react-three/drei";

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
        <fog attach="fog" args={["white", 0, 60]} />
        {/*<ambientLight intensity={0.05} />*/}
        <directionalLight
          castShadow
          intensity={0.5}
          position={[-3,1,3]}
        />
        <Model />
        <Box castShadow receiveShadow position={[4, 0.5, -4]}>
          <meshStandardMaterial attach="material" color="white" />
        </Box>
        <Floor />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
