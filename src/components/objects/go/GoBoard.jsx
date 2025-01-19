import React from 'react';
import { RigidBody } from '@react-three/rapier';

export function GoBoard() {
  const boardSize = 8; // Cambia este valor para definir un tablero de NxN
  const squareSize = 1; // Tamaño de cada casilla en la cuadrícula

  // Crear las líneas de la cuadrícula
  const lines = [];
  for (let i = 0; i <= boardSize; i++) {
    // Líneas horizontales
    lines.push(
      <mesh
        key={`h-${i}`}
        position={[
          20, // Posición en X (ajusta según necesidad)
          0.26, // Altura sobre la base
          i * squareSize - (boardSize / 2) * squareSize + 20, // Posición en Z
        ]}
      >
        <boxGeometry args={[boardSize * squareSize, 0.0001, 0.02]} /> {/* Línea más fina */}
        <meshStandardMaterial color="black" />
      </mesh>
    );
    
    // Líneas verticales
    lines.push(
      <mesh
        key={`v-${i}`}
        position={[
          i * squareSize - (boardSize / 2) * squareSize + 20, // Posición en X
          0.26, // Altura sobre la base
          20, // Posición en Z
        ]}
      >
        <boxGeometry args={[0.02, 0.0001, boardSize * squareSize]} /> {/* Línea más fina */}
        <meshStandardMaterial color="black" />
      </mesh>
    );
  }

  return (
    <>
      {/* Base del tablero */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[20, 0, 20]} rotation={[-Math.PI / 2, 0, 0]}>
          <boxGeometry args={[boardSize * squareSize, boardSize * squareSize, 0.5]} />
          <meshStandardMaterial color="saddlebrown" roughness={0.8} />
        </mesh>
      </RigidBody>

      {/* Líneas del tablero */}
      {lines}
    </>
  );
}