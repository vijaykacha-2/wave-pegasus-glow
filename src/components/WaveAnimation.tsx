
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import * as THREE from "three";

const WaveGeometry = () => {
  const meshRef = useRef<Mesh>(null);
  
  const { geometry, material } = useMemo(() => {
    const geo = new THREE.PlaneGeometry(40, 15, 200, 100);
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        colorDeep: { value: new THREE.Color("#1e40af") },
        colorMid: { value: new THREE.Color("#3b82f6") },
        colorLight: { value: new THREE.Color("#93c5fd") },
        colorWhite: { value: new THREE.Color("#ffffff") },
      },
      vertexShader: `
        uniform float time;
        varying vec2 vUv;
        varying float vWave;
        varying vec3 vPosition;
        
        void main() {
          vUv = uv;
          
          vec3 pos = position;
          
          // Create multiple wave layers for smooth, flowing motion
          float wave1 = sin(pos.x * 0.15 + time * 1.2) * 1.5;
          float wave2 = sin(pos.x * 0.25 + pos.y * 0.1 + time * 0.8) * 1.0;
          float wave3 = sin(pos.x * 0.35 + time * 1.5) * 0.8;
          float wave4 = sin(pos.x * 0.45 + pos.y * 0.05 + time * 0.6) * 0.6;
          
          // Combine waves for natural flowing motion
          pos.z = wave1 + wave2 + wave3 + wave4;
          
          vWave = pos.z;
          vPosition = pos;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 colorDeep;
        uniform vec3 colorMid;
        uniform vec3 colorLight;
        uniform vec3 colorWhite;
        varying vec2 vUv;
        varying float vWave;
        varying vec3 vPosition;
        
        void main() {
          // Normalize wave value
          float wave = (vWave + 3.0) / 6.0;
          
          // Create depth-based color mixing
          float depth = vUv.y;
          
          // Base color gradient from deep blue to light blue
          vec3 baseColor = mix(colorDeep, colorMid, depth);
          baseColor = mix(baseColor, colorLight, depth * depth);
          
          // Add white highlights on wave peaks
          float highlight = smoothstep(0.6, 1.0, wave);
          vec3 finalColor = mix(baseColor, colorWhite, highlight * 0.7);
          
          // Create flowing light effect
          float flowingLight = sin(vPosition.x * 0.1 + vWave * 0.5) * 0.5 + 0.5;
          finalColor = mix(finalColor, colorLight, flowingLight * 0.3 * highlight);
          
          // Gradient alpha for smooth blending
          float alpha = 0.9 - depth * 0.4;
          alpha *= smoothstep(-2.0, 2.0, vWave);
          
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

  return <mesh ref={meshRef} geometry={geometry} material={material} rotation={[-Math.PI / 8, 0, 0]} position={[0, -2, 0]} />;
};

const WaveAnimation = ({ className }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <Canvas
        camera={{ position: [0, 5, 12], fov: 60 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <directionalLight position={[-10, -10, -5]} intensity={0.4} color="#93c5fd" />
        <WaveGeometry />
      </Canvas>
    </div>
  );
};

export default WaveAnimation;
