import css from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import Floor from "../components/Floor";
import Box from "../components/Box";
import Lightbulb from "../components/Lightbulb";
import OrbitControls from "../components/OrbitControls";
import MySound from '../assets/bg_theme.mp3';
import useSound from 'use-sound';
import { useState } from "react";

export default function Home() {
  const [play, { stop, pause }] = useSound(MySound);
  const [playing, setPlaying] = useState(false);

  return (
    <div className={css.scene} onClick={() => {
      if (playing) {
        pause();
        setPlaying(false);
      } else {
        play();
        setPlaying(true);
      }
    }}>
      <div style={{ cursor: "pointer", position: 'absolute', top: 0, left: 0, width: '100%', textAlign: "center", color: 'white', zIndex: 5 }}>
        {playing ? "Stop" : "Play"}
      </div>
      <Canvas
        shadows={true}
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.3} />
        <Lightbulb position={[0, 3, 0]} />
        <Box rotateX={3} rotateY={0.2} />
        <OrbitControls />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
