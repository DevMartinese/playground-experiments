import React, { useState } from 'react';
import { RigidBody } from '@react-three/rapier';
import { motion } from 'motion/react';

export function ChessBoard() {
  const boardSize = 8; // Tamaño del tablero (8x8)
  const squareSize = 1; // Tamaño de cada casilla
  const [showText, setShowText] = useState(false);

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
        onCollisionEnter={({ other }) => {
          if (other.rigidBodyObject?.name === "player") {
            setShowText(true);
            motion.animate("#text", { opacity: 1 }, { duration: 0.5 });
          }
        }}
        onCollisionExit={({ other }) => {
          if (other.rigidBodyObject?.name === "player") {
            motion.animate("#text", { opacity: 0 }, { duration: 0.5 }).then(() => {
              setShowText(false);
            });
          }
        }}
      >
        <mesh position={[0, 0, 0]}> {/* Elevada para estar encima del Plane */}
          <boxGeometry args={[boardSize + 1, 0.1, boardSize + 1]} /> {/* Base más grande que el tablero */}
          <meshStandardMaterial color="saddlebrown" roughness={0.8} />
        </mesh>
      </RigidBody>

      {/* Casillas del tablero */}
      {squares}

      {/* Texto con efecto fade usando motion fuera del Canvas */}
      {showText && (
        <motion.div
          id="text"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',  // Ubicado en la esquina superior derecha
            opacity: 0, // Comienza invisible
            color: 'white',
            fontSize: '20px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '10px 20px',
            borderRadius: '8px',
            zIndex: 10,
          }}
        >
          Estás en el tablero de ajedrez
        </motion.div>
      )}
    </>
  );
}