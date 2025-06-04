
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import * as THREE from "three";

const WaveGeometry = () => {
  const meshRef = useRef<Mesh>(null);
  
  const { geometry, material } = useMemo(() => {
    const geo = new THREE.PlaneGeometry(50, 20, 300, 150);
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        colorBase: { value: new THREE.Color("#ffffff") },
        colorMid: { value: new THREE.Color("#60a5fa") },
        colorDeep: { value: new THREE.Color("#2563eb") },
        colorDark: { value: new THREE.Color("#1d4ed8") },
      },
      vertexShader: `
        uniform float time;
        varying vec2 vUv;
        varying float vWave;
        varying vec3 vPosition;
        
        void main() {
          vUv = uv;
          vec3 pos = position;
          
          // Create smooth flowing horizontal waves like the reference
          float wave1 = sin(pos.x * 0.08 + time * 0.6) * 2.2;
          float wave2 = sin(pos.x * 0.12 + pos.y * 0.03 + time * 0.4) * 1.8;
          float wave3 = sin(pos.x * 0.06 + time * 0.8) * 1.5;
          float wave4 = sin(pos.x * 0.15 + pos.y * 0.02 + time * 0.3) * 1.2;
          float wave5 = sin(pos.x * 0.04 + time * 0.5) * 2.5;
          
          // Combine for natural flowing motion
          pos.z = wave1 + wave2 + wave3 + wave4 + wave5;
          
          vWave = pos.z;
          vPosition = pos;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 colorBase;
        uniform vec3 colorMid;
        uniform vec3 colorDeep;
        uniform vec3 colorDark;
        varying vec2 vUv;
        varying float vWave;
        varying vec3 vPosition;
        
        void main() {
          // Normalize wave height
          float wave = (vWave + 8.0) / 16.0;
          float depth = 1.0 - vUv.y;
          
          // Create the gradient layers like the reference
          vec3 baseColor = mix(colorBase, colorMid, depth * 0.3);
          baseColor = mix(baseColor, colorDeep, depth * 0.6);
          baseColor = mix(baseColor, colorDark, depth * 0.8);
          
          // Add wave-based color variation
          float waveInfluence = smoothstep(0.3, 0.8, wave);
          baseColor = mix(baseColor, colorDeep, waveInfluence * 0.4);
          
          // Create flowing highlights
          float flowX = sin(vPosition.x * 0.05 + vWave * 0.3) * 0.5 + 0.5;
          float highlight = smoothstep(0.7, 1.0, wave) * flowX;
          vec3 finalColor = mix(baseColor, colorBase, highlight * 0.8);
          
          // Smooth alpha blending
          float alpha = 0.85;
          alpha *= smoothstep(0.0, 0.2, vUv.y);
          alpha *= smoothstep(1.0, 0.8, vUv.y);
          alpha *= smoothstep(-6.0, 6.0, vWave);
          
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    });
    
    return { geometry: geo, material: mat };
  }, []);

  useFrame(({ clock }) => {
    if (meshRef.current && meshRef.current.material) {
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.time.value = clock.elapsedTime;
    }
  });

  return <mesh ref={meshRef} geometry={geometry} material={material} rotation={[-Math.PI / 12, 0, 0]} position={[0, -3, 0]} />;
};

const WaveAnimation = ({ className }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <Canvas
        camera={{ position: [0, 8, 15], fov: 65 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[15, 15, 8]} intensity={0.9} />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#60a5fa" />
        <WaveGeometry />
      </Canvas>
    </div>
  );
};

export default WaveAnimation;
