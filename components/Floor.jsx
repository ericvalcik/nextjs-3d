import React from "react";
import {Plane} from "@react-three/drei";

function Floor(props) {
  return (
    <Plane
      receiveShadow
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}
      args={[1000, 1000]}
    >
      <meshStandardMaterial attach="material" color="white" />
    </Plane>
  );
}

export default Floor;