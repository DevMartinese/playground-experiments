import { useRef, useState } from 'react';
import { Box, Plane, useKeyboardControls } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { Controls } from '../App';
import { useFrame, useThree } from '@react-three/fiber';
import { Chess } from './objects/chess/Chess';
import { Go } from './objects/go/Go';

export const Experience = () => {
  const [start, setStart] = useState(false);
  const cube = useRef();
  const isOnFloor = useRef(true);

  // Acceso a la cámara y escena desde useThree
  const { camera } = useThree();

  const jump = () => {
    if (isOnFloor.current) {
      cube.current.applyImpulse({ x: 0, y: 5, z: 0 });
      isOnFloor.current = false;
    }
  };

  const jumpPressed = useKeyboardControls((state) => state[Controls.jump]);
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);
  const backPressed = useKeyboardControls((state) => state[Controls.back]);
  const forwardPressed = useKeyboardControls(
    (state) => state[Controls.forward]
  );

  const handleMovement = () => {
    if (!isOnFloor.current) {
      return;
    }
    if (rightPressed) {
      cube.current.applyImpulse({ x: 0.1, y: 0, z: 0 });
    }
    if (leftPressed) {
      cube.current.applyImpulse({ x: -0.1, y: 0, z: 0 });
    }

    if (forwardPressed) {
      cube.current.applyImpulse({ x: 0, y: 0, z: -0.1 });
    }
    if (backPressed) {
      cube.current.applyImpulse({ x: 0, y: 0, z: 0.1 });
    }
  };

  // Actualizar la posición de la cámara en cada frame
  useFrame(() => {
    if (cube.current) {
      // La cámara sigue al cubo
      camera.position.lerp(
        {
          x: cube.current.translation().x + 10, // Cámara ligeramente detrás en el eje X
          y: cube.current.translation().y + 10, // Cámara por encima del cubo
          z: cube.current.translation().z + 10, // Cámara detrás en el eje Z
        },
        0.05 // Suavizar el movimiento
      );

      // Hacer que la cámara apunte al cubo
      camera.lookAt(
        cube.current.translation().x,
        cube.current.translation().y,
        cube.current.translation().z
      );
    }

    if (jumpPressed) jump();
    handleMovement();
    if (!start) return;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-10, 10, 0]} intensity={0.4} />

      {/* Cubo (Box) que la cámara sigue */}
      <RigidBody
        name='player'
        position={[-15, 1, 0]}
        ref={cube}
        onCollisionEnter={({ other }) => {
          if (other.collider?.name === "floor") {
            isOnFloor.current = true;
          }
        }}
        onCollisionExit={({ other }) => {
          if (other.collider?.name === "floor") {
            isOnFloor.current = false;
          }
        }}
      >
        <Box onClick={() => setStart(true)} scale={0.5}>
          <meshStandardMaterial color={"pink"} />
        </Box>
      </RigidBody>

      {/* Tablero de ajedrez */}
      <Chess />
      <Go />

      {/* Plano base */}
      <RigidBody type="fixed" name="floor">
        <Plane rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} args={[1000, 1000]}>
          <meshStandardMaterial color={"springgreen"} />
        </Plane>
      </RigidBody>
    </>
  );
};