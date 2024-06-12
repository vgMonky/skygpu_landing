// src/components/createScene.js
import * as BABYLON from 'babylonjs';

export const createScene = (engine, canvas) => {
  // This creates a basic Babylon Scene object (non-mesh)
  const scene = new BABYLON.Scene(engine);

  // This creates and positions a free camera (non-mesh)
  const camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
  // This targets the camera to scene origin
  camera.setTarget(BABYLON.Vector3.Zero());
  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7;

  // Our built-in 'sphere' shape.
  const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 32 }, scene);
  // Move the sphere upward 1/2 its height
  sphere.position.y = 1;

  // Our built-in 'ground' shape.
  const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);

  // Add CRT shader effect
  BABYLON.Effect.ShadersStore["crtFragmentShader"] = `
    #ifdef GL_ES
        precision highp float;
    #endif
    // Samplers
    varying vec2 vUV;
    uniform sampler2D textureSampler;
    // Parameters
    uniform vec2 curvature;
    vec2 curveRemapUV(vec2 uv)
    {
        // as we near the edge of our screen apply greater distortion using a cubic function
        uv = uv * 2.0 - 1.0;
        vec2 offset = abs(uv.yx) / vec2(curvature.x, curvature.y);
        uv = uv + uv * offset * offset;
        uv = uv * 0.5 + 0.5;
        return uv;
    }
    void main(void)
    {
        vec2 remappedUV = curveRemapUV(vec2(vUV.x, vUV.y));
        vec4 baseColor = texture2D(textureSampler, remappedUV);
        if (remappedUV.x < 0.0 || remappedUV.y < 0.0 || remappedUV.x > 1.0 || remappedUV.y > 1.0){
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        } else {
            gl_FragColor = baseColor;
        }
    }
`;

  // Add post process
  const postProcess = new BABYLON.PostProcess("CRTShaderPostProcess", "crt", ["curvature"], null, 1, camera);
  postProcess.onApply = function (effect) {
    effect.setFloat2("curvature", 2.6, 2.6); // Adjust curvature here
  };

  return scene;
};