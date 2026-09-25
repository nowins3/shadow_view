import React from "react";
import { useGLTF } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
/* eslint-disable import/no-webpack-loader-syntax */
import vertexShader from "!!raw-loader!../../assets/shaders/sand_vertex_shader.glsl";
import fragmentShader from "!!raw-loader!../../assets/shaders/sand_fragment_shader.glsl";

const Sand = (props) => {
  const { nodes } = useGLTF("./3D/sand3.glb");
  const { scene } = useThree(); // Access the Three.js scene
  const sandRef = useRef();
  const pointsRefs = useRef([]);

  useThree(() => {
    scene.background = new THREE.Color("#161515"); // Set the background color to black
  });
  // Get an array of all meshes inside the GLB file
  const sandMeshes = Object.values(nodes).filter((node) => node.isMesh);

  // 2. Set up our custom shader uniforms
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uParticleSize: { value: 10 }, // Base pixel size of the dust flakes
      uVibrationSpeed: { value: 0.2 },
      uVibrationAmplitude: { value: 0.005 }, // How violently they shake
    }),
    [],
  );
  useMemo(() => {
    sandMeshes.forEach((mesh) => {
      const geometry = mesh.geometry;
      const vertexCount = geometry.attributes.position.count;
      const randomFactors = new Float32Array(vertexCount * 3);

      for (let i = 0; i < vertexCount * 3; i++) {
        randomFactors[i] = Math.random();
      }
      geometry.setAttribute(
        "aRandom",
        new THREE.BufferAttribute(randomFactors, 3),
      );
    });
  }, [sandMeshes]);

  // 3. Update uTime for all instantiated materials
  useFrame((state) => {
    pointsRefs.current.forEach((pointsElement) => {
      if (pointsElement && pointsElement.material) {
        pointsElement.material.uniforms.uTime.value =
          state.clock.getElapsedTime();
      }
    });
  });

  return (
    <group ref={sandRef} {...props} dispose={null}>
      {sandMeshes.map((mesh, index) => (
        <points
          ref={(el) => (pointsRefs.current[index] = el)}
          key={index}
          geometry={mesh.geometry}
        >
          <shaderMaterial
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={uniforms}
          />
        </points>
      ))}
    </group>
  );
};

useGLTF.preload("./3D/sand3.glb");

export default Sand;
