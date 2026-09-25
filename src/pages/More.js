import React from "react";
import "../assets/css/More.css";
import Navbar from "../layouts/Navbar";
import Loader from "../components/3D/Loader";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Leva } from "leva";
import {
  EffectComposer,
  Noise,
  DepthOfField,
  Bloom,
} from "@react-three/postprocessing";
import ParticleHand from "../components/3D/ParticleHand";
import Sand from "../components/3D/Sand";
import Dust from "../components/3D/Dust";
import Smoke from "../components/3D/Smoke";
import Search from "../components/3D/Search";
import CameraController from "../components/3D/CameraController";

const More = () => {
  return (
    <div>
      <Navbar />
      <Leva />
      <Canvas className="moreBackground">
        <Suspense fallback={<Loader />}>
          <CameraController />
          <PerspectiveCamera
            makeDefault
            position={[0.4, -0.4, -10.8]}
            rotation={[0, -2.6, 0]}
          />
          <Smoke position={[0.3, 0, -10.0]} rotation={[0, Math.PI / 4, 0]} />
          <group>
            <ParticleHand
              position={[4, -2.5, 1.5]}
              rotation={[-1.0, 0, -Math.PI]}
              scale={0.15}
            />
          </group>
          <group>
            <Search scale={0.2} position={[4, -1.0, 1.4]} />
          </group>
          <group>
            <Sand position={[0, 0, 0]} rotation={[0, 0, 0]} scale={6} />
          </group>
          <group>
            <Dust />
          </group>
          <EffectComposer>
            <Noise opacity={0.006} />
            <DepthOfField
              focusDistance={0.04} // Where the camera focuses (0.0 means right at the lens)
              focalLength={0.4} // Length of the focus zone
              bokehScale={1} // How intense/blurry the background becomes
            />
            <Bloom />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default More;
