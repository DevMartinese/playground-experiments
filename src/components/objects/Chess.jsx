import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

export function Chess({ scale = 1 }) { // Recibe scale como prop
  const { nodes, materials } = useGLTF('/assets/chess/scene.gltf');

  // Configuración de físicas para piezas negras
  const blackPiecePhysics = {
    restitution: 0.5, // Rebote
    friction: 0.8,    // Fricción
    mass: 1,          // Masa
    colliders: 'hull', // Usar un collider ajustado a la forma
  };

  // Configuración de físicas para piezas blancas
  const whitePiecePhysics = {
    restitution: 0.3, // Rebote
    friction: 0.9,    // Fricción
    mass: 1,          // Masa
    colliders: 'hull', // Usar un collider ajustado a la forma
  };

  // Escalar posiciones para respetar el `scale`
  const adjustPosition = (position) => position.map((p) => p * scale);

  return (
    <>
      {/* Piezas Negras */}
      <RigidBody {...blackPiecePhysics} position={adjustPosition([-0.037, 0.5, 7.928])}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.ChessBlackPieces}
          scale={[1.334 * scale, 1.168 * scale, 1.334 * scale]} // Escala aplicada
        />
      </RigidBody>
      <RigidBody {...blackPiecePhysics} position={adjustPosition([-0.06, 0.5, -0.182])}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.ChessBlackPieces}
          scale={[1.549 * scale, 1.357 * scale, 1.549 * scale]} // Escala aplicada
        />
      </RigidBody>
      <RigidBody {...blackPiecePhysics} position={adjustPosition([-0.017, 0.5, 15.242])}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.ChessBlackPieces}
          scale={[1.334 * scale, 1.168 * scale, 1.334 * scale]} // Escala aplicada
        />
      </RigidBody>
      <RigidBody {...blackPiecePhysics} position={adjustPosition([-0.005, 0.5, 19.256])}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.ChessBlackPieces}
          scale={[1.142 * scale, 1 * scale, 1.142 * scale]} // Escala aplicada
        />
      </RigidBody>
      <RigidBody {...blackPiecePhysics} position={adjustPosition([-0.049, 0.5, 3.95])}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.ChessBlackPieces}
          scale={[1.549 * scale, 1.357 * scale, 1.549 * scale]} // Escala aplicada
        />
      </RigidBody>
      <RigidBody {...blackPiecePhysics} position={adjustPosition([-0.027, 0.5, 11.575])}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.ChessBlackPieces}
          scale={[1.334 * scale, 1.168 * scale, 1.334 * scale]} // Escala aplicada
        />
      </RigidBody>

      {/* Piezas Blancas */}
      <RigidBody {...whitePiecePhysics} position={adjustPosition([0.028, 0.5, 30.786])}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.ChessWhitePieces}
          scale={[1.334 * scale, 1.168 * scale, 1.334 * scale]} // Escala aplicada
        />
      </RigidBody>
      <RigidBody {...whitePiecePhysics} position={adjustPosition([0.005, 0.5, 22.676])}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.ChessWhitePieces}
          scale={[1.549 * scale, 1.357 * scale, 1.549 * scale]} // Escala aplicada
        />
      </RigidBody>
      <RigidBody {...whitePiecePhysics} position={adjustPosition([0.049, 0.5, 38.1])}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.ChessWhitePieces}
          scale={[1.334 * scale, 1.168 * scale, 1.334 * scale]} // Escala aplicada
        />
      </RigidBody>
      <RigidBody {...whitePiecePhysics} position={adjustPosition([0.06, 0.5, 42.114])}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.ChessWhitePieces}
          scale={[1.142 * scale, 1 * scale, 1.142 * scale]} // Escala aplicada
        />
      </RigidBody>
      <RigidBody {...whitePiecePhysics} position={adjustPosition([0.016, 0.5, 26.808])}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.ChessWhitePieces}
          scale={[1.549 * scale, 1.357 * scale, 1.549 * scale]} // Escala aplicada
        />
      </RigidBody>
      <RigidBody {...whitePiecePhysics} position={adjustPosition([0.038, 0.5, 34.433])}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials.ChessWhitePieces}
          scale={[1.334 * scale, 1.168 * scale, 1.334 * scale]} // Escala aplicada
        />
      </RigidBody>
    </>
  );
}

useGLTF.preload('/assets/chess/scene.gltf');