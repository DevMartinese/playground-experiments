import React from 'react';
import { RigidBody } from '@react-three/rapier';

export function ChessBoard() {
  const boardSize = 8; // Tamaño del tablero (8x8)
  const squareSize = 1; // Tamaño de cada casilla

  // Generar las casillas del tablero
  const squares = [];
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      const isBlack = (row + col) % 2 === 1; // Alternar colores
      squares.push(
        <RigidBody
          key={`${row}-${col}`}
          type="fixed" // Casillas no se mueven
          position={[
            col * squareSize - (boardSize / 2) + squareSize / 2,
            0.04, // Ligeramente por encima de la base
            row * squareSize - (boardSize / 2) + squareSize / 2,
          ]}
          colliders="cuboid" // Collider en forma de cubo
        >
          <mesh>
            <boxGeometry args={[squareSize, 0.1, squareSize]} />
            <meshStandardMaterial color={isBlack ? 'black' : 'white'} />
          </mesh>
        </RigidBody>
      );
    }
  }

  return (
    <>
    <RigidBody
        type="fixed" // La base no se mueve
        colliders="cuboid" // Collider rectangular para la base
      >
        <mesh position={[0, 0, 0]}> {/* Elevada para estar encima del Plane */}
          <boxGeometry args={[boardSize + 1, 0.1, boardSize + 1]} /> {/* Base más grande que el tablero */}
          <meshStandardMaterial color="saddlebrown" roughness={0.8} />
        </mesh>
      </RigidBody>

      {/* Casillas del tablero */}
      {squares}
    </>
  );
}