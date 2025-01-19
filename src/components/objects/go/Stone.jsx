import React from 'react';
import { RigidBody } from '@react-three/rapier';

export function Stone() {
  // Posición y color predeterminados
  const position = [20, 0.5, 20];  // Ubicación en el tablero
  const color = 'black';           // Color de la piedra de Go (puede ser 'white')

  return (
    <RigidBody
      position={position}
      colliders="cuboid"  // Collider esférico para física realista
      restitution={0.2} // Rebote bajo para mayor realismo
      friction={0.9}    // Alta fricción para evitar deslizamientos
    >
      <mesh scale={[1, 0.3, 1]}>  {/* Escalar en Y para aplanar la esfera */}
        <sphereGeometry args={[0.5, 32, 32]} />  {/* Piedra de Go redonda aplastada */}
        <meshStandardMaterial
          color={color}
          roughness={0.7}  // Rugosidad alta para simular textura de piedra
          metalness={0.3}  // Un leve brillo
        />
      </mesh>
    </RigidBody>
  );
}