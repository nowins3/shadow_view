import React from "react";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
/* eslint-disable import/no-webpack-loader-syntax */
import vertexShader from "!!raw-loader!../../assets/shaders/dust_vertex_shader.glsl";
import fragmentShader from "!!raw-loader!../../assets/shaders/dust_fragment_shader.glsl";

const Dust = () => {
  const pointsRef = useRef();
  const dustRef = useRef();
  const particles = 4000;
  const positions = new Float32Array(particles * 3); // x, y, z
  const rand = new Float32Array(particles * 3);

  for (let i = 0; i < particles; i++) {
    positions[i] = (Math.random() - 0.5) * 30; // Spread in a 20x20x20 cube
    rand[i] = Math.random();
  }

  // 2. Set up our custom shader uniforms
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uParticleSize: { value: 20.0 }, // Base pixel size of the dust flakes
      uVibrationSpeed: { value: 0.35 },
      uVibrationAmplitude: { value: 0.08 }, // How violently they shake
    }),
    [],
  );
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.material.uniforms.uTime.value =
        state.clock.getElapsedTime(); // Adjust for faster or slower vibration
      if (dustRef.current) {
        dustRef.current.position.y += 0.005;
      }
    }
  });

  return (
    <group ref={dustRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-aRandom" args={[rand, 3]} />
        </bufferGeometry>
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          wireframe
        />
        <EffectComposer>
          <Bloom />
        </EffectComposer>
      </points>
    </group>
  );
};

export default Dust;
