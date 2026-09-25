varying float vRandom;
uniform float uTime;

// Cheap 2D hash
float hash(vec2 p) {
  p = fract(p * vec2(127.1, 311.7));
  p += dot(p, p + 17.5);
  return fract(p.x * p.y);
}

// Smooth value noise on uv space
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1,0)), u.x),
    mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), u.x),
    u.y
  );
}

void main() {
    //Centering the UV coordinates around (0,0) for better noise patterns
    vec2 uv = gl_PointCoord - vec2(0.5);

    // Radial distance from center
    float r = length(uv);
    float angle = atan(uv.y, uv.x);

    float t = uTime + vRandom * 100.0;  // each particle lives in its own time offset

    float warp = noise(uv * 6.0 + t * 0.8);
    warp += 0.75 * noise(uv * 12.0 + t * 1.3);
    warp += 0.5 * noise(uv * 20.0 - t * 0.6);
    
    float edge = (0.15 + 0.4 * (warp - 0.5));
    float alpha = smoothstep(edge + 0.0001, edge - 0.0001, r);
    if (alpha < 0.1) discard;

    // Inner shimmer glow toward center
    float glow = pow(1.0 - r / edge, 2.0);

    vec3 dustColor = mix(
    vec3(0.1647, 0.1725, 0.1843),   // dim outer dust color
    vec3(0.1373, 0.1412, 0.1843),   // bright inner core
    glow
    );
    
    gl_FragColor = vec4(dustColor, alpha * (0.6 + 0.4 * vRandom)); 
}