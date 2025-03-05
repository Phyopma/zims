"use client";
import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useThree, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";
import EnhancedHotspot from "../../components/makerspace/enhanced-hotspot";

const HDRBackground = ({ hdrPath }) => {
  const texture = useLoader(RGBELoader, hdrPath, (loader) => {
    loader.setDataType(THREE.FloatType);
  });
  texture.mapping = THREE.EquirectangularReflectionMapping;
  return <primitive attach="background" object={texture} />;
};

const ScrollControlledCamera = ({ scrollProgress }) => {
  const { camera } = useThree();
  const initialRotation = useRef(0);
  const targetRotation = useRef(Math.PI * 2);
  const initialPosition = useRef({ x: 0, y: 30, z: 50 });
  const fadeInComplete = useRef(false);

  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  useEffect(() => {
    camera.position.set(
      initialPosition.current.x,
      initialPosition.current.y,
      initialPosition.current.z,
    );
    camera.lookAt(0, 80, 0);
    camera.rotation.x = Math.PI / 4;
    camera.rotation.z = 0;
  }, [camera]);

  useFrame(() => {
    const progress = scrollProgress.get();

    if (progress <= 0.3) {
      const phase1Progress = easeInOutCubic(progress / 0.3);
      const lookAtY = THREE.MathUtils.lerp(80, 0, phase1Progress);
      const tiltAngle = THREE.MathUtils.lerp(Math.PI / 4, 0, phase1Progress);
      camera.lookAt(0, lookAtY, 0);
      camera.rotation.x = tiltAngle;
      return;
    }

    if (progress <= 0.6) {
      camera.rotation.x = 0;
      const phase2Progress = easeInOutCubic((progress - 0.3) / 0.3);
      const rotationY = THREE.MathUtils.lerp(0, Math.PI * 2, phase2Progress);
      camera.rotation.y = rotationY;
      return;
    }

    const phase3Progress = easeInOutCubic((progress - 0.6) / 0.4);
    const newY = THREE.MathUtils.lerp(30, 100, phase3Progress);
    const newZ = THREE.MathUtils.lerp(50, 150, phase3Progress);
    const tiltAngle = THREE.MathUtils.lerp(0, -Math.PI / 4, phase3Progress);

    camera.position.set(0, newY, newZ);
    camera.rotation.x = tiltAngle;
  });

  return null;
};

const HDRDisplay = () => {
  const scrollY = useMotionValue(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (!animationComplete) {
        event.preventDefault();
        const currentScroll = scrollY.get();
        const delta = event.deltaY * 0.0005;
        const newScroll = Math.max(Math.min(currentScroll + delta, 1), 0);
        scrollY.set(newScroll);

        if (newScroll >= 1) {
          setAnimationComplete(true);
          document.body.style.overflow = "auto";
        } else if (newScroll <= 0) {
          document.body.style.overflow = "hidden";
        }
      } else if (window.scrollY === 0) {
        setAnimationComplete(false);
        document.body.style.overflow = "hidden";
        scrollY.set(1);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [animationComplete, scrollY]);

  const tools = [
    {
      position: [-20, 13, 30],
      icon: "/tools/3d-printer.svg",
      title: "3D Printer",
      description:
        "High-precision 3D printing for rapid prototyping and custom parts manufacturing.",
    },
    {
      position: [20, 15, 25],
      icon: "/tools/saw.svg",
      title: "Power Tools",
      description:
        "Professional-grade power tools for woodworking and metal fabrication.",
    },
    {
      position: [-15, 20, 40],
      icon: "/tools/glue-gun.svg",
      title: "Assembly Station",
      description:
        "Fully equipped workstation for project assembly and detailed work.",
    },
  ];

  const scrollProgress = useSpring(scrollY, {
    damping: 30,
    stiffness: 60,
  });

  const opacity = useTransform(scrollProgress, [0, 0.2], [0, 1]);
  const firstSceneOpacity = useTransform(
    scrollProgress,
    [0, 0.5, 0.6],
    [1, 1, 0],
  );
  const secondSceneOpacity = useTransform(
    scrollProgress,
    [0.5, 0.6, 1],
    [0, 1, 1],
  );

  return (
    <motion.div className="relative mt-20 h-full w-full" style={{ opacity }}>
      <div className="absolute left-0 top-0 z-10 w-full bg-gradient-to-b from-black/80 to-transparent py-8 text-center">
        <h1 className="mb-2 text-4xl font-bold text-yellow">
          Welcome to Our Makerspace
        </h1>
        <p className="text-xl text-white/90">
          Explore our state-of-the-art facilities and tools
        </p>
      </div>
      <div className="relative mx-auto flex w-full flex-col">
        <motion.div
          className="relative h-screen"
          style={{ opacity: firstSceneOpacity }}
        >
          <Canvas className="absolute inset-0">
            <ScrollControlledCamera scrollProgress={scrollProgress} />
            <PerspectiveCamera makeDefault position={[0, 50, 50]} fov={90} />
            <OrbitControls
              enableZoom={false}
              enableRotate={false}
              enablePan={false}
            />
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} />
            <pointLight position={[0, 5, 10]} intensity={1} />
            <Suspense fallback={null}>
              <HDRBackground hdrPath="/images/makerspace/3d_model.hdr" />
              {tools.map((tool, index) => (
                <EnhancedHotspot
                  key={index}
                  position={tool.position}
                  icon={tool.icon}
                  title={tool.title}
                  description={tool.description}
                  opacity={firstSceneOpacity}
                  onClick={() => {
                    setSelectedTool(tool);
                    setShowModal(true);
                  }}
                />
              ))}
            </Suspense>
          </Canvas>
        </motion.div>

        <motion.div
          className="relative h-screen"
          style={{
            opacity: secondSceneOpacity,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        >
          <Canvas className="absolute inset-0">
            <ScrollControlledCamera scrollProgress={scrollProgress} />
            <PerspectiveCamera makeDefault position={[0, 50, 50]} fov={90} />
            <OrbitControls
              enableZoom={false}
              enableRotate={false}
              enablePan={false}
            />
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} />
            <pointLight position={[0, 5, 10]} intensity={1} />
            <Suspense fallback={null}>
              <HDRBackground hdrPath="/images/makerspace/Photo Studio Loft 4K.hdr" />
            </Suspense>
          </Canvas>
        </motion.div>

        {showModal && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50">
            <div className="w-96 rounded-lg bg-neutral-900 p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-yellow">
                  {selectedTool?.title}
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-2xl text-white hover:text-yellow"
                >
                  ×
                </button>
              </div>
              <p className="text-white">{selectedTool?.description}</p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default HDRDisplay;
