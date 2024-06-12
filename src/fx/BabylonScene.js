// src/components/BabylonScene.js
import React, { useEffect, useRef } from 'react';
import * as BABYLON from 'babylonjs';
import { createScene } from './createScene'; // Import the createScene function

const BabylonScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const createBabylonScene = async () => {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const engine = new BABYLON.Engine(canvas, true);

      // Create the scene using the imported createScene function
      const scene = createScene(engine, canvas);

      // Run the render loop
      engine.runRenderLoop(() => {
        scene.render();
      });

      // Resize the engine when the browser window is resized
      window.addEventListener('resize', () => {
        engine.resize();
      });
    };

    createBabylonScene();
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default BabylonScene;