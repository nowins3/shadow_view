import React from "react";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
/* eslint-disable import/no-webpack-loader-syntax */
import vertexShader from "!!raw-loader!../../assets/shaders/smoke_vertex_shader.glsl";
import fragmentShader from "!!raw-loader!../../assets/shaders/smoke_fragment_shader.glsl";

const Smoke = (props) => {
  const matRef = useRef();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(0.09, 0.086, 0.086) },
      uSpeed: { value: 0.05 },
      uDensity: { value: 5.0 },
      uOpacity: { value: 0.075 },
      uOctaves: { value: 4 },
      uRise: { value: 0.2 },
    }),
    [],
  );
  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();
    if (matRef.current) {
      matRef.current.uniforms.uTime.value = elapsedTime;
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh>
        <planeGeometry args={[10, 10, 10, 10]} />
        <shaderMaterial
          ref={matRef}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          side={THREE.DoubleSide}
          transparent={true}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
};

export default Smoke;
