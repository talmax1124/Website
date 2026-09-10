import { ContactShadows } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group } from "three";

function AlloyWheel() {
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += Math.min(delta, 0.05) * 0.4;
  });

  const spokes = useMemo(
    () => Array.from({ length: 5 }, (_, i) => (i / 5) * Math.PI * 2),
    [],
  );

  return (
    <group ref={group} rotation={[0.22, 0.7, 0.04]} scale={1.55}>
      <mesh>
        <torusGeometry args={[1.1, 0.24, 24, 80]} />
        <meshStandardMaterial color="#1a1b1f" roughness={0.72} metalness={0.08} />
      </mesh>
      <mesh>
        <torusGeometry args={[1.02, 0.055, 16, 80]} />
        <meshStandardMaterial color="#e4eaf3" roughness={0.18} metalness={0.55} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.94, 0.94, 0.18, 64]} />
        <meshStandardMaterial color="#c3ccd8" roughness={0.24} metalness={0.5} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.04]}>
        <cylinderGeometry args={[0.38, 0.5, 0.14, 40]} />
        <meshStandardMaterial color="#dfe6ef" roughness={0.16} metalness={0.58} />
      </mesh>
      {spokes.map((angle) => (
        <group key={angle} rotation={[0, 0, angle]}>
          <mesh position={[0, 0.58, 0.05]}>
            <boxGeometry args={[0.24, 0.78, 0.12]} />
            <meshStandardMaterial color="#e8edf5" roughness={0.16} metalness={0.58} />
          </mesh>
        </group>
      ))}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.1]}>
        <cylinderGeometry args={[0.24, 0.24, 0.08, 32]} />
        <meshStandardMaterial color="#edf1f7" roughness={0.14} metalness={0.6} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.15]}>
        <cylinderGeometry args={[0.1, 0.1, 0.04, 24]} />
        <meshStandardMaterial color="#0b1018" roughness={0.4} metalness={0.2} />
      </mesh>
      {spokes.map((angle) => (
        <mesh
          key={`lug-${angle}`}
          position={[Math.cos(angle) * 0.17, Math.sin(angle) * 0.17, 0.15]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <cylinderGeometry args={[0.03, 0.03, 0.05, 10]} />
          <meshStandardMaterial color="#f4f7fb" roughness={0.12} metalness={0.65} />
        </mesh>
      ))}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.1]}>
        <cylinderGeometry args={[0.8, 0.8, 0.06, 48]} />
        <meshStandardMaterial color="#6a7382" roughness={0.38} metalness={0.4} />
      </mesh>
    </group>
  );
}

export default function WheelScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.15, 4.1], fov: 28 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%", background: "transparent", pointerEvents: "none" }}
    >
      <ambientLight intensity={0.85} />
      <hemisphereLight args={["#f2f5fa", "#2a3344", 1.1]} />
      <directionalLight position={[3.5, 4, 5]} intensity={2.8} />
      <directionalLight position={[-4, 1, 2]} intensity={1.4} color="#9ec0ea" />
      <directionalLight position={[0, -1.5, 3]} intensity={0.7} />
      <AlloyWheel />
      <ContactShadows
        position={[0, -1.55, 0]}
        opacity={0.55}
        scale={8}
        blur={2.8}
        far={4}
        color="#000000"
      />
    </Canvas>
  );
}
