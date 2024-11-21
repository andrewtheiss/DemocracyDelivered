import React, { useRef, useEffect } from 'react';
import GlobeGL from 'globe.gl';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function App() {
  const globeRef = useRef();

  useEffect(() => {
    const globeElement = globeRef.current;

    // Create Globe using Globe.GL
    const globe = GlobeGL()(globeElement)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .backgroundColor('rgba(0,0,0,0)')
      .onGlobeClick(({ lat, lng }) => {
        alert(`Clicked at latitude: ${lat}, longitude: ${lng}`);
      });

    // Set initial camera position
    globe.controls().autoRotate = false;
    globe.controls().autoRotateSpeed = 0.1;
    globe.controls().enableRotate = true;
    globe.camera().position.z = 500;

    // Handle cleanup
    return () => {
      globe._destructor();
    };
  }, []);

  return (
    <div
      ref={globeRef}
      style={{ width: '100vw', height: '100vh', position: 'absolute' }}
    />
  );
}

export default App;