"use client";
import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useThree, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, CameraControls } from "@react-three/drei";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";
import Hotspot from "@/app/components/makerspace/hotspot";

import ThreeDPrinter from "@/public/tools/3d-printer.svg";

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

const ScrollControlledCamera = () => {
  const { camera } = useThree();
  const cameraRotationRef = useRef(0);

  useEffect(() => {
    const handleScroll = (event) => {
      const delta = event.deltaY * 0.005;
      cameraRotationRef.current += delta;
      cameraRotationRef.current = Math.max(
        Math.min(cameraRotationRef.current, Math.PI),
        -Math.PI,
      );
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  useFrame(() => {
    camera.rotation.y = cameraRotationRef.current;
  });

  return null;
};

const HDRDisplay = () => {
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const handleScroll = (event) => {
      var delta;
      if (event.deltaY < 0) {
        delta = event.deltaY * 0.001;
      } else {
        delta = event.deltaY * 0.005;
      }
      scrollY.set(Math.max(Math.min(scrollY.get() + delta, 1), 0));
      console.log(scrollY.get());
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  const scrollYProgress = useSpring(scrollY, {
    damping: 10,
    stiffness: 100,
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="h-[900px] w-full"
      // style={{ opacity }}
      style={{
        opacity,
        // paddingTop: padding
      }}
    >
      <div className="mx-auto flex h-full w-full justify-center">
        <Canvas id="canvas">
          <ScrollControlledCamera />
          <OrbitControls
            enableZoom={false}
            enableRotate={false}
            enablePan={false}
          />
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <pointLight position={[0, 5, 10]} intensity={1} />
          <Suspense fallback={null}>
            <HDRBackground />

            <Hotspot
              position={[0, 0, 0]}
              onClick={() => {
                document.getElementById("modal").showModal();
              }}
            >
              <ThreeDPrinter className="text-blue-500 h-8 w-8" />
            </Hotspot>
          </Suspense>
        </Canvas>
        <dialog id="modal" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="text-lg font-bold">Hello!</h3>
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
          </div>
        </dialog>
      </div>
    </motion.div>
  );
};

export default HDRDisplay;