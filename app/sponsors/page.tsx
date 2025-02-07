"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface SponsorData {
  id: number;
  name: string;
  description: string;
  contribution: string;
  thumbnail: string;
}

const sponsors: SponsorData[] = [
  "HAAS.png",
  "IndustrialPlasticSupply.png",
  "NHRL.png",
  "SendCutSend.png",
  "UROP.jpg",
  "ZTLTech.png",
  "SendCutSend.png",
  "UROP.jpg",
  "ZTLTech.png",
].map((name, idx) => ({
  id: idx,
  name: name.replace(".png", "").replace(".jpg", ""),
  description: "Leading industry partner providing cutting-edge solutions",
  contribution:
    "Supporting ZOTBotics with advanced manufacturing equipment and expertise",
  thumbnail: `/images/SponsorLogos/${name}`,
}));

const SponsorCard = ({
  sponsor,
  index,
  setSelectedSponsor,
}: {
  sponsor: SponsorData;
  index: number;
  setSelectedSponsor: (sponsor: SponsorData | null) => void;
}) => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);
  const opacity = useTransform(mouseX, [-0.5, 0, 0.5], [1, 0.8, 1]);
  const boxShadow = useTransform(
    mouseX,
    [-0.5, 0, 0.5],
    [
      "0 10px 20px rgba(192, 192, 192, 0.5)",
      "0 0px 0px rgba(192, 192, 192, 0)",
      "0 10px 20px rgba(192, 192, 192, 0.5)",
    ],
  );

  // Controlled wide-spread distribution
  const angle = (index / sponsors.length) * Math.PI * 2 + Math.random() * 0.8;
  const minRadius = 60; // Wider minimum distance from center
  const maxRadius = 100; // Increased maximum distance for wider spread
  const radius = minRadius + Math.random() * (maxRadius - minRadius);

  const randomX = Math.cos(angle) * radius + Math.random() * 45;
  const randomY = Math.sin(angle) * radius + Math.random() * 5;

  // Adjusted layered depth effect
  const baseScale = 1.0; // Reduced base scale for better visibility
  const scaleVariation = Math.min(0.15, (index % 4) * 0.05); // More subtle scale variation
  const scale = baseScale - scaleVariation;

  // Reduced blur effect
  const blur = Math.min(0.5, (1 - scale) * 1);
  const zIndex = Math.floor((1 - scaleVariation) * 10);

  return (
    <motion.div
      key={sponsor.id}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        x: randomX + "%",
        y: randomY + "%",
        scale: scale,
      }}
      transition={{
        type: "spring",
        stiffness: 80, // Reduced stiffness for smoother animation
        damping: 15,
        delay: index * 0.15,
      }}
      ref={ref}
      style={{
        position: "absolute",
        left: "30%",
        top: "15%",
        zIndex: zIndex,
        filter: `blur(${blur}px)`,
        transform: `translate(-50%, -50%)`,
        width: "450px", // Slightly smaller size for better distribution
        perspective: "1000px",
      }}
      onMouseMove={(event) => {
        if (!ref.current) return;
        const rect = (ref.current as HTMLDivElement).getBoundingClientRect();
        const xPct = (event.clientX - rect.left) / rect.width - 0.5;
        const yPct = (event.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(xPct);
        mouseY.set(yPct);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="from-white/10 to-white/20 group relative overflow-hidden rounded-2xl bg-gradient-to-br p-1 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
      whileHover={{
        scale: 1.1,
        zIndex: 50,
        filter: "blur(0px)",
        transition: { duration: 0.2 },
      }}
      onClick={() => setSelectedSponsor(sponsor)}
    >
      <motion.div
        className="from-gray-900/80 hover:from-indigo-600/80 hover:to-purple-600/80 h-full rounded-xl bg-gradient-to-br to-blue/80 p-6 transition-all duration-500"
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="bg-black/20 relative aspect-video w-full overflow-hidden rounded-lg backdrop-blur-sm">
          <Image
            src={sponsor.thumbnail}
            alt={sponsor.name}
            fill
            className="object-contain p-6 transition-all duration-500 group-hover:scale-110 group-hover:brightness-125"
          />
        </div>
        <h3 className="text-white mt-4 text-center text-lg font-medium">
          {sponsor.name}
        </h3>
      </motion.div>
      <div className="ring-white/10 group-hover:ring-white/20 absolute inset-0 rounded-2xl ring-1 transition-all duration-300" />
    </motion.div>
  );
};

export default function Sponsors() {
  const [selectedSponsor, setSelectedSponsor] = useState<SponsorData | null>(
    null,
  );

  return (
    <BackgroundLines className="from-indigo-200/90 via-purple-300/80 to-blue-200/90 relative min-h-screen w-full bg-gradient-to-br px-4 py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="from-blue-600 via-indigo-500 to-purple-600 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            Our Valued Partners
          </h1>
          <p className="text-gray-600 mt-4">
            Empowering innovation through collaboration
          </p>
        </div>

        <div className="relative h-[80vh] w-full">
          {sponsors.map((sponsor, index) => (
            <SponsorCard
              key={sponsor.id}
              sponsor={sponsor}
              index={index}
              setSelectedSponsor={setSelectedSponsor}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedSponsor && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-black/60 fixed inset-0 z-50 backdrop-blur-sm"
                onClick={() => setSelectedSponsor(null)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="from-indigo-100 to-purple-100 border-indigo-200/20 fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-2xl border bg-gradient-to-br p-8 shadow-2xl"
              >
                <button
                  onClick={() => setSelectedSponsor(null)}
                  className="text-gray-400 hover:text-white absolute right-4 top-4 transition-colors"
                >
                  ✕
                </button>
                <div className="flex flex-col items-center gap-6">
                  <div className="bg-black/20 relative h-40 w-80 overflow-hidden rounded-xl p-4">
                    <Image
                      src={selectedSponsor.thumbnail}
                      alt={selectedSponsor.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="from-blue-600 via-indigo-500 to-purple-600 bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
                      {selectedSponsor.name}
                    </h2>
                    <p className="text-gray-700 mt-2">
                      {selectedSponsor.description}
                    </p>
                    <div className="from-indigo-100/30 to-purple-100/30 mt-6 rounded-lg bg-gradient-to-br p-4">
                      <h3 className="text-gray-800 mb-2 font-medium">
                        Contribution to ZOTBotics
                      </h3>
                      <p className="text-gray-700">
                        {selectedSponsor.contribution}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </BackgroundLines>
  );
}
