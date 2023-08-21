import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { HemisphereLight, PointLight } from 'three';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

function Computers() {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh dispose={null}>
      <HemisphereLight intensity={0.15} groundColor="black" />
      <PointLight intensity={1} />
      <primitive object={computer.scene} />
    </mesh>

  );
}

function ComputersCanvas() {
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>

  );
}

export default ComputersCanvas;
