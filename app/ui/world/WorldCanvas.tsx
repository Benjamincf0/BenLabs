"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
// import { useRef } from 'react';
// import { useFrame } from '@react-three/fiber';

// function TorusKnot() {
//   // const meshRef = useRef();

//   // useFrame(() => {
//   //   if (meshRef.current) {
//   //     meshRef.current.rotation.x += 0.01;
//   //     meshRef.current.rotation.y += 0.01;
//   //   }
//   // });

//   // return (
//   //   <mesh ref={meshRef}>
//   //     <torusKnotGeometry args={[1, 0.4, 128, 32]} />
//   //     <meshStandardMaterial color="hotpink" />
//   //   </mesh>
//   // );
// }

export default function WorldCanvas() {
  return (
    <Canvas className="fixed inset-0 -z-10">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {/* <TorusKnot /> */}
      <OrbitControls />
    </Canvas>
  );
}