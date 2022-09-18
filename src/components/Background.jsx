import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React from "react";
import { WebGLCubeRenderTarget } from "three";

export default function Background() {
  const { gl } = useThree();

  const texture = useTexture("/background.png");
  const formatted = new WebGLCubeRenderTarget(
    texture.image.height
  ).fromEquirectangularTexture(gl, texture);
  return <primitive attach="background" object={formatted.texture} />;
}
