import React, { useRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
/* eslint-disable import/no-webpack-loader-syntax */
import vertexShader from "!!raw-loader!../../assets/shaders/search_vertex_shader.glsl";
import fragmentShader from "!!raw-loader!../../assets/shaders/search_fragment_shader.glsl";

const Search = (props) => {
  const { nodes } = useGLTF("./3D/magnifying_glass_3d.glb");
  const pointsRefs = useRef([]);
  const searchRef = useRef();

  const glassMeshes = Object.values(nodes).filter((node) => node.isMesh);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uParticleSize: { value: 0.001 }, // Base pixel size of the dust flakes
      uVibrationSpeed: { value: 0.5 },
      uVibrationAmplitude: { value: 0.003 },
    }),
    [],
  );
  useFrame((state) => {
    if (searchRef.current) {
      searchRef.current.rotation.y += 0.2;
    }
  });
  return (
    <group ref={searchRef} {...props} dispose={null}>
      {glassMeshes.map((mesh, index) => (
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

useGLTF.preload("./3D/magnifying_glass_3d.glb");

export default Search;
