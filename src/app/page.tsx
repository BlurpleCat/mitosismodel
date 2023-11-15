"use client";

import { useEffect, useState } from 'react';
import GLBViewer from './glb-viewer';
export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <main className="">
      <h1>Cell Models</h1>
      <div className="model">
        <h2>Model 1</h2>
        <GLBViewer url="/Powerful Crift-Turing.glb" />
      </div>
      <div className="model">
        <h2>Model 1</h2>
        <GLBViewer url="/Powerful Crift-Turing.glb" />
      </div>
      <div className="model">
        <h2>Model 1</h2>
        <GLBViewer url="/Powerful Crift-Turing.glb" />
      </div>
      <div className="model">
        <h2>Model 1</h2>
        <GLBViewer url="/Powerful Crift-Turing.glb" />
      </div>
      <div className="model">
        <h2>Model 1</h2>
        <GLBViewer url="/Powerful Crift-Turing.glb" />
      </div>
      <div className="model">
        <h2>Model 1</h2>
        <GLBViewer url="/Powerful Crift-Turing.glb" />
      </div>
    </main>
  )
}
