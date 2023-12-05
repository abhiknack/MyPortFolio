import React, { useRef, useState } from "react";
import HomeCSS from "./Home.module.css";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import TextImage from "./Assets/brand.png";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";

function Model(props) {
  const { nodes, materials } = useGLTF("/scene.gltf");
  return (
    <group {...props} dispose={null} scale={40} position={[0, 0.3, 2]}>
      <group scale={0.01}>
        <mesh
          castShadow
          geometry={nodes.Cube_Material001_0.geometry}
          material={materials["Material.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

function MModel(props) {
  const { nodes, materials } = useGLTF("/aa.gltf");
 
  return (
    <group {...props} dispose={null} scale={0.9}>
      {/* <pointLight intensity={8.08} decay={2} position={[-3.423, 2.319, 4.468]} />
        <pointLight intensity={3.6} decay={2} position={[4.322, 2.057, 0.812]} /> */}
      <mesh
        receiveShadow
        geometry={nodes.Plane_1.geometry}
        material={nodes.Plane_1.material}
        position={[0, 0, -1.684]}
        rotation={[Math.PI * -0.06, 0, 0]}
        scale={[window.innerWidth*0.01476, window.innerHeight*0.01476, 1]}
      >
        {/* <meshStandardMaterial opacity={0.5} transparent  />
         */}
         <meshPhysicalMaterial transparent opacity={0.3} metalness={1} roughness={0.2} clearcoat={0} transmission={1} />
      </mesh>
    </group>
  );
}

const Home = () => {
  const [lightPosition, setLightPosition] = useState([0, 0, 0]);
  const [CubeRotation, setCubeRotation] = useState([0, 0, 0]);
  const [BackRotation, setBackRotation] = useState([0, 0, 0]);
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const rect = event.target.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((clientY - rect.top) / rect.height) * 2 + 1;

    setLightPosition([x * 5, y * 5, 5]);
    setCubeRotation([x * 0.1, y * 0.1, 0]);
    // Adjust the multiplier for light movement range
  };
  return (
    <section className={HomeCSS.sec}>
      <Canvas shadows onPointerMove={handleMouseMove}>
        <Suspense fallback={null}>
          <ambientLight />
          <Model rotation={CubeRotation} />
          <MModel />
          <pointLight
            castShadow
            position={lightPosition}
            color="white"
            intensity={16.0}
            distance={50}
          />
          <PerspectiveCamera
            makeDefault
            position={[0, 2, 8]}
            rotation={[Math.PI * -0.06, Math.PI * 0, Math.PI * 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};
export default Home;
