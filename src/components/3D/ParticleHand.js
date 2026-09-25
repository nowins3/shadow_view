import React, { useRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
/* eslint-disable import/no-webpack-loader-syntax */
import vertexShader from "!!raw-loader!../../assets/shaders/hand_vertex_shader.glsl";
import fragmentShader from "!!raw-loader!../../assets/shaders/hand_fragment_shader.glsl";

const ParticleHand = (props) => {
  const pointsRef = useRef();
  const { nodes } = useGLTF("./3D/hand.glb");

  // 1. Extract the geometry vertices into a flat array
  const pointsPositions = useMemo(() => {
    // Find the mesh inside your GLB file
    const targetMesh = Object.values(nodes).find((node) => node.isMesh);

    if (!targetMesh) {
      console.warn("No mesh found in the GLB file!");
      return new Float32Array(0);
    }

    // Get raw position attributes [x, y, z, x, y, z...]
    const geometry = targetMesh.geometry;
    return geometry.attributes.position.array;
  }, [nodes]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uParticleSize: { value: 0.001 }, // Base pixel size of the dust flakes
      uVibrationSpeed: { value: 0.5 },
      uVibrationAmplitude: { value: 0.003 },
    }),
    [],
  );
  return (
    <points ref={pointsRef} {...props}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[pointsPositions, 3]}
        />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </points>
  );
};

useGLTF.preload("./3D/hand.glb");

export default ParticleHand;
