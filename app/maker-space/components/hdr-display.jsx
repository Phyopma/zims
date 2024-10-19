"use client";
import { Suspense, useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const HDRBackground = () => {
  const texture = useLoader(
    RGBELoader,
    "/images/makerspace/3d_model.hdr",
    (loader) => {
      loader.setDataType(THREE.FloatType);
    },
  );

  texture.mapping = THREE.EquirectangularReflectionMapping;

  return (
    <primitive
      className="mx-auto flex items-center justify-center"
      attach="background"
      object={texture}
    />
  );
};

const HDRDisplay = () => {
  const { scrollYProgress } = useScroll();
  const scrollSmooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Fade in from 0 opacity to 1
  const opacity = useTransform(scrollSmooth, [0, 0.3], [0, 1]);

  const translateY = useTransform(scrollSmooth, [0, 1], [-70, 0]);

  const scale = useTransform(scrollSmooth, [0, 1], [1.15, 1]);

  return (
    <motion.div
      className=" h-full w-full overflow-hidden rounded-xl p-4 shadow-lg"
      style={{
        opacity: opacity,
        scale: scale,
        translateY: translateY,
        transformOrigin: "center",
      }}
    >
      {/* Add a box shadow for depth */}
      <div className="absolute inset-0 z-[-1] blur-lg">
        <motion.div
          className="from-blue-500 to-purple-500 h-full w-full rounded-xl bg-gradient-to-r opacity-50"
          style={{ opacity }}
        />
      </div>
      <div className="mx-auto flex h-full w-full justify-center">
        <Canvas className={`hover:cursor-move`}>
          <OrbitControls enablePan={false} enableZoom={false} />

          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <pointLight position={[0, 5, 10]} intensity={1} />
          <Suspense fallback={null}>
            <HDRBackground />
          </Suspense>
        </Canvas>
      </div>
    </motion.div>
  );
};

export default HDRDisplay;
