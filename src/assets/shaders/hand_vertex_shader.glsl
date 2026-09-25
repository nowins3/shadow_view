uniform highp float uParticleSize;

attribute vec3 aRandom;
varying float vRandom;

void main() {
    vRandom = aRandom.x;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    // Attenuate size: Makes particles smaller the further away they are from the camera
    gl_PointSize = uParticleSize * (1.0 / -(modelViewMatrix * vec4(position, 1.0)).z);;
}