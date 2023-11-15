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
      <p>
      <br/>
        Craig Barnett<br/>
        <br/>
        Color Key<br/>

        Black = Cell<br/>
        Green = Centrioles<br/>
        Yellow = Nuclear Membrane<br/>
        Dark Blue = Nucleolous<br/>
        Pink = Chromatin<br/>
        Light Blue = Spindle Fibers<br/>
        Red = Chromosomes<br/>
        Grey = Centromere<br/>
        Brown = Cleavage Furrow<br/>
        Purple = Sister Chromatid<br/>
        <br/>
        Controls:<br/>
        Left Click to Rotate<br/>
        Right Click to Move<br/>
        Scroll to Zoom<br/>
        <br/>
      </p>
      <div className="model">
        <h2>Interphase</h2>
        <GLBViewer url="/Interphase.glb" />
      </div>
      <div className="model">
        <h2>Prophase</h2>
        <GLBViewer url="/Prophase.glb" />
      </div>
      <div className="model">
        <h2>Metaphase</h2>
        <GLBViewer url="/Metaphase.glb" />
      </div>
      <div className="model">
        <h2>Anaphase</h2>
        <GLBViewer url="/Anaphase.glb" />
      </div>
      <div className="model">
        <h2>Telophase</h2>
        <GLBViewer url="/Telophase.glb" />
      </div>
      <div className="model">
        <h2>Cytokinesis</h2>
        <GLBViewer url="/Cytokinesis.glb" />
      </div>
    </main>
  )
}
