uniform highp float uParticleSize;
uniform float uTime;
uniform float uVibrationSpeed;
uniform float uVibrationAmplitude;

attribute vec3 aRandom;
varying float vRandom;

void main() {
    vRandom = aRandom.x;

    vec3 stablePosition = position;
    float timeFactor = uTime * uVibrationSpeed;

    stablePosition.x += sin(timeFactor * aRandom.x * 4.0) * uVibrationAmplitude;
    stablePosition.y += cos(timeFactor * aRandom.y * 3.5) * uVibrationAmplitude;
    stablePosition.z += sin(timeFactor * aRandom.z * 5.0) * uVibrationAmplitude;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(stablePosition, 1.0);
    // Attenuate size: Makes particles smaller the further away they are from the camera
    gl_PointSize = uParticleSize * (1.0 / -(modelViewMatrix * vec4(stablePosition, 1.0)).z);;
}