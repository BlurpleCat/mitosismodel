import React, { Suspense, useRef } from 'react';
import { Canvas, extend, useLoader, useThree } from '@react-three/fiber';
import { Html, OrbitControls, useProgress } from '@react-three/drei'
const { STLLoader } = require('three/examples/jsm/loaders/STLLoader');

const STLModel = ({ url }: { url: string }) => {
  const geometry = useLoader(STLLoader, url);

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
};

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span
        className='canvas-load'
      >

      </span>
      <p
        style={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40
        }}

      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

const STLViewer = ({ url }: { url: string }) => {
  return (
    <Canvas style={{ height: '400px', width: '400px', border: '2px solid green' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={<Loader />}>
        <STLModel url={url} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};




export default STLViewer;
