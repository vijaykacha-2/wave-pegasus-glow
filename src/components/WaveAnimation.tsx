
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import * as THREE from "three";

const WaveGeometry = () => {
  const meshRef = useRef<Mesh>(null);
  
  const { geometry, material } = useMemo(() => {
    const geo = new THREE.PlaneGeometry(20, 10, 100, 50);
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        colorA: { value: new THREE.Color("#ffffff") },
        colorB: { value: new THREE.Color("#3b82f6") },
        colorC: { value: new THREE.Color("#1d4ed8") },
      },
      vertexShader: `
        uniform float time;
        varying vec2 vUv;
        varying float vWave;
        
        void main() {
          vUv = uv;
          
          vec3 pos = position;
          float wave1 = sin(pos.x * 0.3 + time * 2.0) * 0.5;
          float wave2 = sin(pos.x * 0.5 + pos.y * 0.2 + time * 1.5) * 0.3;
          float wave3 = sin(pos.x * 0.8 + time * 3.0) * 0.2;
          
          pos.z = wave1 + wave2 + wave3;
          vWave = pos.z;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 colorA;
        uniform vec3 colorB;
        uniform vec3 colorC;
        varying vec2 vUv;
        varying float vWave;
        
        void main() {
          float wave = vWave * 0.5 + 0.5;
          vec3 color = mix(colorA, colorB, vUv.x);
          color = mix(color, colorC, wave);
          
          float alpha = 0.8 - vUv.y * 0.5;
          gl_FragColor = vec4(color, alpha);
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

  return <mesh ref={meshRef} geometry={geometry} material={material} rotation={[-Math.PI / 6, 0, 0]} />;
};

const WaveAnimation = ({ className }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <Canvas
        camera={{ position: [0, 2, 8], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <WaveGeometry />
      </Canvas>
    </div>
  );
};

export default WaveAnimation;
