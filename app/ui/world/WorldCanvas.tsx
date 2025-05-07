"use client";

import { useEffect } from "react";
import { useRef } from "react";

// import THREE.js
import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import getStarfield from "@/app/ui/getStarfield.js";
import {getFresnelMat} from "@/app/ui/getFresnelMat.js";

// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';

// export default function WorldCanvas() {
//   return (
//     <Canvas className="fixed inset-0 -z-10">
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} />
//       {/* <TorusKnot /> */}
//       <OrbitControls />
//     </Canvas>
//   );
// }

const WorldCanvas = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.backgroundColor = "red";
      // ref.current.style.height = "100vh";
      display3D(ref.current);
    }
  }, []);

  return <div ref={ref} className="top-0 left-0 fixed h-screen w-screen z-50"></div>;
};

export default WorldCanvas;

const display3D = (e: HTMLElement) => {

  const w = window.innerWidth;
  const h = window.innerHeight;
  const renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(w, h);
  e.appendChild(renderer.domElement);

  const fov = 75;
  const aspect = w / h;
  const near = 0.1;
  const far = 35;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;
  const scene = new THREE.Scene();

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  const loader = new THREE.TextureLoader();

  // Earth and such:
  const earthGroup = new THREE.Group();
  earthGroup.rotation.z = -23.4 * Math.PI / 180

  const earthGeo = new THREE.IcosahedronGeometry(1, 12);

  const earthMesh = new THREE.Mesh(
    earthGeo,
    new THREE.MeshStandardMaterial({
      map: loader.load("/earth_textures/earthmap8k.jpg"),
      // map: loader.load("/earth_textures/earthspec1k.jpg"),
      lightMap: loader.load("/earth_textures/earthlights8k2.jpeg"),
      lightMapIntensity: 0.5
    })
  );

  const cloudsMesh = new THREE.Mesh(
    earthGeo,
    new THREE.MeshStandardMaterial({
      map: loader.load("earth_textures/earthcloudmap2k.jpg"),
      blending: THREE.AdditiveBlending,
      // opacity: 0.7,
    })
  )
  cloudsMesh.scale.setScalar(1.003)

  const stars = getStarfield({numStars: 2000});
  scene.add(stars);

  const fresnelMat = getFresnelMat();
  const glowMesh = new THREE.Mesh(earthGeo, fresnelMat);
  glowMesh.scale.setScalar(1.01);

  earthGroup.add(earthMesh, cloudsMesh, glowMesh);


  // const wireMesh = new THREE.Mesh(
  //   new THREE.BoxGeometry(2, 2, 2, 3, 3, 3), 
  //   new THREE.MeshBasicMaterial({
  //     color: 0xffffff,
  //     wireframe: true
  //   })
  // );
  // wireMesh.scale.setScalar(1.1);
  // earthMesh.add(wireMesh)

  const lights = new THREE.Group();

  const sun = new THREE.DirectionalLight(0xffffff,  2.0);
  sun.position.set(-2, 0, 1)

  // const ambientLight = new THREE.AmbientLight(0xffffff,  1.00000);
  lights.add(sun);

  const solarSystem = new THREE.Group();
  solarSystem.add(earthGroup, lights);
  solarSystem.rotation.z = 23.4 * Math.PI / 180;

  scene.add(solarSystem, stars)

  const animate = (t = 0) => {
    requestAnimationFrame(animate);
    earthMesh.rotation.y = t * 0.0001;
    glowMesh.rotation.y = t * 0.0001;
    cloudsMesh.rotation.y = t * 0.000105;
    cloudsMesh.rotation.x = t * 0.000002;
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
  
  function handleWindowResize () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', handleWindowResize, false);
};