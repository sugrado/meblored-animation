import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { PerspectiveCamera } from "three";
import gsap from "gsap";
import { useRef } from "react";
import { Model } from "./WhiteSmall";
import Buttons from "./Buttons";
import Background from "./Background";

export default function Content() {
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.set(5, 5, -5);
  const controls = useRef();

  const moveCamera = (
    cameraX,
    cameraY,
    cameraZ,
    controlsX,
    controlsY,
    controlsZ,
    duration = 2
  ) => {
    controls.enabled = false;
    gsap.to(camera.position, {
      x: () => cameraX,
      y: () => cameraY,
      z: () => cameraZ,
      duration: duration,
    });
    gsap.to(controls.current.target, {
      x: () => controlsX,
      y: () => controlsY,
      z: () => controlsZ,
      duration: duration,
      onComplete: () => {
        controls.current.enabled = true;
      },
    });
  };

  return (
    <div style={{ height: window.innerHeight }}>
      <Buttons moveCamera={moveCamera} />
      <Canvas camera={camera} dpr={[1, 1.5]}>
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
          ref={controls}
          makeDefault
        />
      </Canvas>
    </div>
  );
}
