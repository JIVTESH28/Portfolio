import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function IcosahedronMesh() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.25;
      meshRef.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#8b5cf6"
          emissiveIntensity={0.3}
          wireframe={true}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function InnerCore() {
  const coreRef = useRef();

  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.4;
      coreRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <mesh ref={coreRef}>
      <octahedronGeometry args={[1.2, 0]} />
      <meshStandardMaterial
        color="#8b5cf6"
        emissive="#06b6d4"
        emissiveIntensity={0.6}
        wireframe={false}
        roughness={0.2}
        metalness={0.9}
        transparent={true}
        opacity={0.8}
      />
    </mesh>
  );
}

const Scene3D = () => {
  return (
    <div className="w-full h-[360px] md:h-[460px] lg:h-[520px] cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#06b6d4" />
        <pointLight position={[-10, -10, -5]} intensity={2} color="#8b5cf6" />
        <IcosahedronMesh />
        <InnerCore />
      </Canvas>
    </div>
  );
};

export default Scene3D;
