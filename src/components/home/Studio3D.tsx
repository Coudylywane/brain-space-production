
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Text, ContactShadows, Sparkles } from "@react-three/drei";
import type { Group } from "three";

function Camera3D() {
  const cameraRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (cameraRef.current) {
      cameraRef.current.rotation.y += delta * 0.15;
      cameraRef.current.position.y = 0.3 + Math.sin(state.clock.elapsedTime) * 0.08;
    }
  });

  return (
    <group ref={cameraRef} position={[0, 0.3, 0]}>
      {/* Corps de la caméra */}
      <mesh castShadow>
        <boxGeometry args={[1.7, 0.85, 0.8]} />
        <meshStandardMaterial
          color="#202020"
          metalness={0.85}
          roughness={0.25}
        />
      </mesh>

      {/* Objectif */}
      <mesh castShadow position={[0.95, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <cylinderGeometry args={[0.38, 0.38, 0.7, 48]} />
        <meshStandardMaterial color="#555555" metalness={0.9} />
      </mesh>

      {/* Lentille rouge */}
      <mesh castShadow position={[1.32, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <cylinderGeometry args={[0.25, 0.25, 0.06, 48]} />
        <meshStandardMaterial
          color="#e50914"
          emissive="#e50914"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Petit écran supérieur */}
      <mesh castShadow position={[-0.25, 0.58, 0]}>
        <boxGeometry args={[0.55, 0.3, 0.08]} />
        <meshStandardMaterial color="#333333" />
      </mesh>

      {/* Voyant REC */}
      <mesh castShadow position={[0.35, 0.58, 0.25]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial
          color="#e50914"
          emissive="#e50914"
          emissiveIntensity={2.5}
        />
      </mesh>
    </group>
  );
}

function StudioScreen({
  position,
  title,
  subtitle,
}: {
  position: [number, number, number];
  title: string;
  subtitle: string;
}) {
  return (
    <group position={position}>
      <mesh castShadow>
        <boxGeometry args={[1.65, 1.15, 0.08]} />
        <meshStandardMaterial
          color="#24080c"
          emissive="#59000a"
          emissiveIntensity={0.5}
          metalness={0.4}
        />
      </mesh>

      <Text
        position={[0, 0.15, 0.06]}
        fontSize={0.15}
        color="#ff2635"
        anchorX="center"
      >
        {title}
      </Text>

      <Text
        position={[0, -0.2, 0.06]}
        fontSize={0.095}
        color="white"
        anchorX="center"
      >
        {subtitle}
      </Text>
    </group>
  );
}

function StudioScene() {
  const ringRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.12;
    }
  });

  return (
    <>
      <ambientLight intensity={0.6} />

      <pointLight position={[0, 3, 3]} color="#ff1525" intensity={45} castShadow shadow-mapSize={[1024, 1024]} />
      <pointLight position={[-4, 2, 1]} color="#e50914" intensity={25} castShadow />
      <spotLight position={[3, 5, 4]} intensity={40} color="white" castShadow shadow-mapSize={[1024, 1024]} />

      {/* Anneau lumineux */}
      <group ref={ringRef} position={[0, -0.7, -1]}>
        <mesh castShadow rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.3, 0.025, 16, 100]} />
          <meshStandardMaterial
            color="#e50914"
            emissive="#e50914"
            emissiveIntensity={3}
          />
        </mesh>
      </group>

      {/* Particules d'ambiance */}
      <Sparkles count={50} scale={7} size={1.4} speed={0.25} color="#e50914" opacity={0.35} />

      {/* Caméra flottante */}
      <Float speed={1.5} rotationIntensity={0.08} floatIntensity={0.15}>
        <Camera3D />
      </Float>

      {/* Ombres de contact */}
      <ContactShadows position={[0, -1.45, 0]} opacity={0.45} scale={12} blur={2.2} far={4} color="#000000" />

      {/* Écrans du studio */}
      <StudioScreen
        position={[-2.5, 0.8, -1]}
        title="FILMS"
        subtitle="Des histoires à raconter"
      />

      <StudioScreen
        position={[2.5, -0.4, -1]}
        title="DOCUMENTAIRES"
        subtitle="Le monde en images"
      />

      {/* Sol */}
      <mesh castShadow receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.5, 0]}
      >
        <planeGeometry args={[15, 15]} />
        <meshStandardMaterial color="#090909" roughness={0.4} />
      </mesh>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.05}
        rotateSpeed={0.45}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 1.8}
      />
    </>
  );
}

export default function Studio3D() {
  return (
    <div
      className="studio-3d"
      role="img"
      aria-label="Scène 3D du studio Brain Space Production"
    >
      <Canvas
        shadows
        camera={{ position: [0, 1.4, 6.5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        performance={{ min: 0.5 }}
      >
        <StudioScene />
      </Canvas>
    </div>
  );
}
