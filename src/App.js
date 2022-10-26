import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import React, { useRef, Suspense } from "react";

import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import "./App.css";
import * as THREE from "three";
import { Model } from "./Blob.js";

import { OrbitControls } from "@react-three/drei";
// const WaveShaderMaterial = shaderMaterial(
//   //Uniform
//   { uTime: 0, uColor: new THREE.Color(1.0, 0.0, 0.0) },
//   //Vertex Shader
//   glsl`
//   varying vec2 vUv;
//   precision mediump float;
//   uniform float uTime;
//   #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);
//     void main() {
//       vUv  = uv;

//       vec3 pos = position;
//       float noiseFreq = 1.5;
//       float noiseAmp= 0.25;
//       vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y,pos.z);
//       pos.z += snoise3(noisePos) * noiseAmp;
//       gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
//     }
//   `,
//   //Fragment Shader
//   glsl`
//    precision mediump float;
//    uniform vec3 uColor;
//    uniform float uTime;
//    varying vec2 vUv;
//    void main(){
//     gl_FragColor = vec4( uColor,1.0);
//    }
//   `
// );

// extend({ WaveShaderMaterial });

// const Wave = () => {
//   const ref = useRef();

//   useFrame(({ clock }) => {
//     ref.current.uTime = clock.getElapsedTime();
//   });

//   const [image] =useLoader(THREE.TextureLoader, [""])
//   return (
//     <mesh>
//       <planeGeometry args={[0.4, 0.6, 16, 16]} />
//       <waveShaderMaterial uColor={"hotpink"} ref={ref} />
//     </mesh>
//   );
// };
// const Scene = () => {
//   return (
//     <Canvas camera={{ fov: 12, position: [0, 0, 5] }}>
//       <Suspense fallback={null}>
//         <Wave />
//       </Suspense>
//     </Canvas>
//   );
// };

const Blobs = () => {
  const blobRef = useRef();
  console.log(blobRef);
  useFrame((clock) => {
    blobRef.current.rotation.x = blobRef.current.rotation.z += 0.006;
  });

  return (
    <>
      <mesh ref={blobRef}>
        <Model />
      </mesh>
      <Model position={[10, 0, 0]} />
    </>
  );
};
function App() {
  return (
    <>
      <div className="container">
        
        <div className="canvas">
          <Canvas camera={{ fov: 70, position: [-1, 0, 10] }}>
            <directionalLight intensity={1} position={[10, 10, 10]} />
            <ambientLight intensity={1} />
            <Blobs />
            {/* <OrbitControls /> */}
          </Canvas>
          <div className="title">
           <div className="line"></div>
          <div className="actualTitle">
            <h1>EMRE KELLECI</h1>
            <div className="middleLine"></div>
          </div>
          <div className="line2"></div>

        </div>
        </div>
        <h1> Hello </h1>
      </div>
    </>
  );
}

export default App;
