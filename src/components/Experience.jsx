import { useRef, useState } from 'react';
import { Box, Capsule, OrbitControls, useKeyboardControls } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { Controls } from '../App';
import { useFrame } from '@react-three/fiber';

export const Experience = () => {
  const [start, setStart] = useState(false);
  const capsule = useRef();

  const jump = () => {
    if (isOnFloor.current) {
      capsule.current.applyImpulse({ x: 0, y: 5, z: 0 });
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
      capsule.current.applyImpulse({ x: 0.1, y: 0, z: 0 });
    }
    if (leftPressed) {
      capsule.current.applyImpulse({ x: -0.1, y: 0, z: 0 });
    }

    if (forwardPressed) {
      capsule.current.applyImpulse({ x: 0, y: 0, z: -0.1 });
    }
    if (backPressed) {
      capsule.current.applyImpulse({ x: 0, y: 0, z: 0.1 });
    }
  };

  useFrame((_state) => {
    if (!start) return;
    if (jumpPressed) jump();

    handleMovement();

  })

  const isOnFloor = useRef(true);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-10, 10, 0]} intensity={0.4} />
      <OrbitControls />

      <RigidBody 
        position={[-2.5, 1, 0]} 
        ref={capsule}
        onCollisionEnter={({ other }) => {
          if (other.rigidBodyObject.name === "floor") {
            isOnFloor.current = true;
          }
        }}
        onCollisionExit={({ other }) => {
          if (other.rigidBodyObject.name === "floor") {
            isOnFloor.current = false;
          }
        }}
      >
        <Capsule onClick={() => setStart(true)}>
          <meshStandardMaterial color={"pink"} />
        </Capsule>
      </RigidBody>

      <RigidBody type="fixed" name="floor">
        <Box position={[0, 0, 0]} args={[10, 1, 10]}>
          <meshStandardMaterial color={"springgreen"} />
        </Box>
      </RigidBody>
    </>
  )
}