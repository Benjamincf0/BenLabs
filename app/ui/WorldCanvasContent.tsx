"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';

export default function WorldCanvasContent() {
  const torusKnotRef = useRef<any>(null);

  return (
    <Canvas className="fixed inset-0 -z-10">
      <ambientLight intensity={0.5} />
      <perspectiveCamera position={[0, 0, 5]} />
      <OrbitControls />
      <mesh ref={torusKnotRef} rotation={[0.4, 0.2, 0]}>
        <torusKnotGeometry args={[1, 0.4, 128, 32]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  );
}