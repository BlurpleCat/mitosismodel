// GLBViewer.js
import React, { Suspense } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ThreeProgress from './three-progress';
const { GLTFLoader } = require('three/examples/jsm/loaders/GLTFLoader');

const GLBModel = ({ url }: { url: string }) => {
  const glb = useLoader(GLTFLoader, url);
  const { camera } = useThree();
  camera.position.set(0, 120, 0)

  return <primitive object={glb.scene} />;
};

const GLBViewer = ({ url }: { url: string }) => {
  return (
    <Canvas style={{ height: '600px', width: '800px' }}>
      <ambientLight intensity={0.8} />
      {/* <pointLight position={[30, 30, 30]} intensity={10.0} /> */}
      <directionalLight position={[30, 120, 30]} target-position={[0, 0, 0]} intensity={0.8} />
      <Suspense fallback={<ThreeProgress />}>
        <GLBModel url={url} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default GLBViewer;
