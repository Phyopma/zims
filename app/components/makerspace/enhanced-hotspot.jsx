"use client";

import { useRef, useState } from 'react';
import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Image from 'next/image';

const EnhancedHotspot = ({ position, icon, title, description, onClick }) => {
  const groupRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [opacity] = useState(1);

  useFrame(({ camera }) => {
    if (groupRef.current) {
      const direction = new THREE.Vector3();
      const worldPosition = new THREE.Vector3();
      groupRef.current.getWorldPosition(worldPosition);
      direction.subVectors(camera.position, worldPosition).normalize();

      const rotation = new THREE.Euler();
      rotation.setFromRotationMatrix(
        new THREE.Matrix4().lookAt(
          direction,
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(0, 1, 0)
        )
      );

      groupRef.current.rotation.copy(rotation);
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Html
        transform
        occlude
        style={{
          transition: 'all 0.2s',
          opacity: opacity,
          transform: `scale(${isHovered ? 1.1 : 1})`,
        }}
        distanceFactor={15}
      >
        <div
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onClick}
        >
          <div className="w-16 h-16 rounded-full bg-yellow backdrop-blur-lg p-2 cursor-pointer
                        transform transition-all duration-300 ease-out
                        hover:scale-125 hover:bg-yellow/60 hover:shadow-xl hover:shadow-yellow/40
                        active:scale-95 active:bg-yellow/70
                        ring-2 ring-yellow/30 hover:ring-yellow/60">
            <Image src={icon} alt={title} width={64} height={64} className="w-full h-full filter drop-shadow-lg" />
            {isHovered && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-4 py-2
                          bg-black/90 backdrop-blur-md rounded-lg text-white text-base font-medium
                          opacity-0 group-hover:opacity-100 transition-opacity duration-200
                          shadow-lg shadow-black/50 border border-white/10">
                {title}
              </div>
            )}
          </div>
        </div>
      </Html>
    </group>
  );
};

export default EnhancedHotspot;