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
      <h1>Craig Barnett Mitosis Models</h1>
      <p>
      <br/>
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
        <br/>
        <p>
          Cells spend 90% of their time here <br/>
          Interphase is broken down into 3 main phases: <br/>
          G1 - the first growth phase, assembles proteins, etc. <br/>
          S - Synthesis phase in which DNA is replicated <br/>
          G2 - more growth, prepare for cell division. Checkpoint after. Checklist/inventory phase<br/>
        </p>
        <GLBViewer url="/Interphase.glb" />
      </div>
      <div className="model">
        <h2>Prophase</h2>
        <br/>
        <p>
          1st and longest phase of mitosis <br/>
          Chromatin coils and condenses into sister chromatids with identical DNA<br/>
          Sister chromatids pair up and form a chromosome<br/>
          Chromosomes are held together in the center<br/>
          The center is called the centromere<br/>
          Nucleolous and nuclear membrane disappear<br/>
          Centrioles begin to migrate to opposite poles<br/>
          Spindle fibers and aster fibers form and move to opposite poles to aid in cell division<br/>
        </p>
        <GLBViewer url="/Prophase.glb" />
      </div>
      <div className="model">
        <h2>Metaphase</h2>
        <br/>
        <p>
        Shortest phase of the cell cycle<br/>
        Chromosomes line up in the middle (equator)<br/>
        Each will have a spindle fiber attached at the centromere<br/>
        Aster fibers and centrioles will be positioned at the poles<br/>
        </p>
        <GLBViewer url="/Metaphase.glb" />
      </div>
      <div className="model">
        <h2>Anaphase</h2>
        <br/>
        <p>
          Spindle fibers shorten, pulling the sister chromatids apart and to the poles<br/>
        </p>
        <GLBViewer url="/Anaphase.glb" />
      </div>
      <div className="model">
        <h2>Telophase</h2>
        <br/>
        <p>
          Cleavage furrow pinches the cell inward<br/>
          Nucleus and all nuclear material reappears<br/>
          Two seperate cells begin to form<br/>
          Almost the opposite of prophase<br/>
          Chromosomes relax back into chromatin<br/>
        </p>
        <GLBViewer url="/Telophase.glb" />
      </div>
      <div className="model">
        <h2>Cytokinesis</h2>
        <br/>
        <p>
          Division of the cytoplasm into two identical daughter cells<br/>
        </p>
        <GLBViewer url="/Cytokinesis.glb" />
      </div>
    </main>
  )
}
