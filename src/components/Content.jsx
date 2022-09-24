import React from "react";
import { PerspectiveCamera } from "three";
import gsap from "gsap";
import { useRef } from "react";
import Buttons from "./Buttons";
import "../styles/App.css";
import Loader from "./Loader";
import CustomCanvas from "./CustomCanvas";

export default function Content() {
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.set(5, 5, 5);
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
      <Buttons moveCamera={moveCamera} controls={controls} camera={camera} />
      <CustomCanvas controls={controls} camera={camera} />
      <Loader />
    </div>
  );
}
