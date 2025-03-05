"use client";
import { useState } from 'react';
import { Html } from '@react-three/drei';
import Image from 'next/image';

interface EnhancedHotspotProps {
  position: [number, number, number];
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
  opacity?: number | any;
}

const EnhancedHotspot = ({
  position,
  icon,
  title,
  description,
  onClick,
  opacity,
}: EnhancedHotspotProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <group position={position}>
      <Html
        transform
        occlude
        style={{
          transition: 'all 0.2s',
          opacity: typeof opacity === 'number' ? opacity : opacity?.get?.() || (isHovered ? 1 : 0.8),
          transform: `scale(${isHovered ? 1.1 : 1})`,
        }}
      >
        <div
          className="relative cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onClick}
        >
          <div className="flex items-center justify-center w-12 h-12 bg-yellow rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
            <Image
              src={icon}
              alt={title}
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
          {isHovered && (
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 bg-neutral-900/90 backdrop-blur-sm p-3 rounded-lg shadow-xl">
              <h3 className="text-yellow font-semibold mb-1">{title}</h3>
              <p className="text-white/80 text-sm">{description}</p>
            </div>
          )}
        </div>
      </Html>
    </group>
  );
};

export default EnhancedHotspot;