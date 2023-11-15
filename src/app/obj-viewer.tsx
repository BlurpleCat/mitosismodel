// OBJViewer.js
import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ThreeProgress from './three-progress';
const { OBJLoader } = require('three/examples/jsm/loaders/OBJLoader');
const { MTLLoader } = require('three/examples/jsm/loaders/MTLLoader');

const OBJModel = ({ objUrl, mtlUrl }: { objUrl: string; mtlUrl: string; }) => {
  useLoader(MTLLoader, mtlUrl).preload();

  const obj = useLoader(OBJLoader, objUrl, (loader) => {
    const mtlLoader = new MTLLoader();
    mtlLoader.load(mtlUrl, (materials: any) => {
      loader.setMaterials(materials);
    });
  });

  return <primitive object={obj} />;
};

const OBJViewer = ({ objUrl, mtlUrl }: { objUrl: string; mtlUrl: string; }) => {
  return (
    <Canvas style={{ height: '400px', width: '400px', border: '2px solid green' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={<ThreeProgress />}>
        <OBJModel objUrl={objUrl} mtlUrl={mtlUrl} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default OBJViewer;
