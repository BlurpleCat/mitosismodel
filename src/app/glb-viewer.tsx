// GLBViewer.js
import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ThreeProgress from './three-progress';
const { GLTFLoader } = require('three/examples/jsm/loaders/GLTFLoader');

const GLBModel = ({ url }: { url: string }) => {
  const glb = useLoader(GLTFLoader, url);

  return <primitive object={glb.scene} />;
};

const GLBViewer = ({ url }: { url: string }) => {
  return (
    <Canvas style={{ height: '400px', width: '400px' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={<ThreeProgress />}>
        <GLBModel url={url} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default GLBViewer;
