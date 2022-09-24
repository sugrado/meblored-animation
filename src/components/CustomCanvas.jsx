import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Background from "./Background";
import { Model } from "./Ready";

export default function CustomCanvas(props) {
  return (
    <Canvas
      gl={{
        antialias: false,
        pixelRatio: window.devicePixelRatio * 0.5,
        powerPreference: "high-performance",
      }}
      camera={props.camera}
      dpr={[1, 1.5]}
    >
      <hemisphereLight
        groundColor="#ff0f00"
        position={[-7, 25, 13]}
        intensity={0.4}
      />
      <Suspense fallback={null}>
        <Background />
        <Model />
      </Suspense>
      <OrbitControls
        enableRotate={false}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.25}
        ref={props.controls}
        makeDefault
      />
    </Canvas>
  );
}
