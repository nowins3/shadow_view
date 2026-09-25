import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span className="loader">
        <p>Loading... {Math.round(progress)}%</p>
      </span>
    </Html>
  );
};

export default Loader;
