/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Chris (https://sketchfab.com/robie1)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/queen-low-poly-41e1d664650a4d50b37edc282d486f2b
Title: Queen - Low Poly
*/

import React from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

export function Queen({isBlack = false, ...props}) {
  const { nodes, materials } = useGLTF('/assets/chess/queen/scene.gltf');

  // Configuración de físicas para la reina
  const physicsProps = {
    restitution: 0.5, // Rebote
    friction: 0.8,    // Fricción
    mass: 1,          // Masa
    colliders: 'hull', // Ajusta el collider a la forma del modelo
  };

  return (
    <RigidBody {...physicsProps} {...props}>
      <group dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LP_Queen_0.geometry}
            material={
              isBlack
                ? new THREE.MeshStandardMaterial({ color: 'black' }) // Material negro si isBlack es true
                : materials.Root // Material predeterminado
            }
            position={[0, 0, 6.61]}
          />
        </group>
      </group>
    </RigidBody>
  );
}

useGLTF.preload('/assets/chess/queen/scene.gltf');
