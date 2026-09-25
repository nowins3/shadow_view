import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const CameraController = () => {
  const { camera, pointer } = useThree();

  // Create temporary vectors to avoid garbage collection lags
  const targetPosition = new THREE.Vector3();

  useFrame(() => {
    // 1. Calculate target based on mouse pointer (-1 to 1)
    // 2. Clamp the maximum distance the camera can move from the center
    const maxMoveX = 0.5;
    const maxMoveY = 0.2;

    const targetX = THREE.MathUtils.clamp(-pointer.x * 2, -maxMoveX, maxMoveX);
    const targetY = THREE.MathUtils.clamp(pointer.y * 2, -maxMoveY, maxMoveY);

    targetPosition.set(targetX, targetY, camera.position.z);

    // 3. Smoothly interpolate (LERP) the camera position
    // 0.05 determines the "lag/trail" speed. Lower = slower trail.
    camera.position.lerp(targetPosition, 0.35);
  });

  return null;
};

export default CameraController;
