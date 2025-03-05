"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { MetalShimmer } from "@/components/ui/metal-shimmer";

interface SponsorData {
  id: number;
  name: string;
  description: string;
  contribution: string;
  thumbnail: string;
  tier: "gold" | "silver" | "bronze";
}

// Define sponsor tiers
const sponsorTiers = {
  gold: ["HAAS.png", "SendCutSend.png"],
  silver: ["IndustrialPlasticSupply.png", "NHRL.png", "ZTLTech.png"],
  bronze: ["UROP.jpg", ]
};

// Flatten and map all sponsors with their tiers
const sponsors: SponsorData[] = [
  ...sponsorTiers.gold.map((name, idx) => ({
    id: idx,
    name: name.replace(".png", "").replace(".jpg", ""),
    description: "Gold tier partner providing premium support and resources",
    contribution: "Major contributor to ZOTBotics' advanced manufacturing capabilities",
    thumbnail: `/images/SponsorLogos/${name}`,
    tier: "gold" as const
  })),
  ...sponsorTiers.silver.map((name, idx) => ({
    id: idx + sponsorTiers.gold.length,
    name: name.replace(".png", "").replace(".jpg", ""),
    description: "Silver tier partner offering valuable industry expertise",
    contribution: "Supporting ZOTBotics with specialized equipment and technical guidance",
    thumbnail: `/images/SponsorLogos/${name}`,
    tier: "silver" as const
  })),
  ...sponsorTiers.bronze.map((name, idx) => ({
    id: idx + sponsorTiers.gold.length + sponsorTiers.silver.length,
    name: name.replace(".png", "").replace(".jpg", ""),
    description: "Bronze tier partner contributing to our community",
    contribution: "Providing essential resources and support for ZOTBotics projects",
    thumbnail: `/images/SponsorLogos/${name}`,
    tier: "bronze" as const
  }))
];

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
  const animatedZIndex = useMotionValue(0);

  // Fixed position patterns based on tier and index
  const getPositionPattern = () => {
    // Define fixed positions for each tier with wider spread
    const positions = {
      gold: [
        { x: -80, y: -40 },  // Left-top
        { x: 80, y: -40 },   // Right-top
      ],
      silver: [
        { x: -120, y: 0 },   // Far left
        { x: 120, y: 0 },    // Far right
        { x: -60, y: 80 },  // Left-bottom
        { x: 60, y: 80 },   // Right-bottom
      ],
      bronze: [
        { x: -160, y: -40 },  // Far left
        { x: 160, y: -40 },   // Far right
        { x: -100, y: -100 },   // Left-top
        { x: 100, y: -100 },    // Right-top
        { x: -120, y: 100 },    // Left-bottom
        { x: 120, y: 100 },     // Right-bottom
        { x: 0, y: -140 },     // Center-top
        { x: 0, y: 140 },      // Center-bottom
      ]
    };

    const tierPositions = positions[sponsor.tier];
    const positionIndex = index % tierPositions.length;
    const variation = (index * 5) % 8;
    
    return {
      x: tierPositions[positionIndex].x + (variation - 4),
      y: tierPositions[positionIndex].y + ((variation * 0.5) - 2)
    };
  };

  const position = getPositionPattern();
  const tierZIndex = sponsor.tier === "gold" ? 30 : sponsor.tier === "silver" ? 20 : 10;
  const baseZIndex = tierZIndex + index;
  
  // Set initial z-index value
  useEffect(() => {
    animatedZIndex.set(baseZIndex);
  }, [baseZIndex, animatedZIndex]);

  const handleMouseEnter = useCallback(() => {
    // Animate z-index change smoothly and activate shimmer effect
    animate(animatedZIndex, 100, {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1]
    });
  }, [animatedZIndex]);

  const handleMouseLeave = useCallback(() => {
    // Animate z-index back to original value
    animate(animatedZIndex, baseZIndex, {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1]
    });
    mouseX.set(0);
    mouseY.set(0);
  }, [animatedZIndex, baseZIndex, mouseX, mouseY]);

  return (
    <motion.div
      key={sponsor.id}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        x: position.x + "%",
        y: position.y + "%",
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: index * 0.15,
      }}
      ref={ref}
      style={{
        position: "absolute",
        left: "35%",
        top: "20%",
        zIndex: animatedZIndex,
        transform: `translate(-50%, -50%)`,
        width: "400px",
        perspective: "1000px",
        pointerEvents: "auto"
      }}
      onMouseMove={(event) => {
        if (!ref.current) return;
        const rect = (ref.current as HTMLDivElement).getBoundingClientRect();
        const xPct = (event.clientX - rect.left) / rect.width - 0.5;
        const yPct = (event.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(xPct);
        mouseY.set(yPct);
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-2xl p-1 transition-all duration-500 ease-in-out isolate bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm hover:shadow-xl hover:shadow-indigo-500/10`}
      onClick={() => {
        setSelectedSponsor(sponsor);
      }}
    >
      <motion.div
        className="h-full rounded-xl p-6 transition-all duration-500"
        style={{
          transformStyle: "preserve-3d",
          background: "transparent",
          scale: useTransform(animatedZIndex, [baseZIndex, 100], [1, 1.1]),
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        <MetalShimmer
          tier={sponsor.tier}
          spread={60}
          disabled={false}
          proximity={64}
          inactiveZone={0}
          movementDuration={1}
          borderWidth={sponsor.tier === "gold" ? 2.5 : sponsor.tier === "silver" ? 2 : 1.5}
        />
        <div 
          className="relative aspect-video w-full overflow-hidden rounded-lg backdrop-blur-md" 
        >
          <Image
            src={sponsor.thumbnail}
            alt={sponsor.name}
            fill
            className="object-contain p-6 transition-all duration-500"
            style={{
              filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))"
            }}
          />
        </div>
        <h3 className={`mt-4 text-center text-lg font-medium ${sponsor.tier === "gold" ? "text-yellow-300" : sponsor.tier === "silver" ? "text-gray-200" : "text-amber-600"}`}>
          {sponsor.name}
        </h3>
      </motion.div>
    </motion.div>
  );
};

export default function Sponsors() {
  const [selectedSponsor, setSelectedSponsor] = useState<SponsorData | null>(
    null,
  );

  return (
    <BackgroundLines className="gradient-background relative min-h-screen w-full px-4 py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="from-blue-300 bg-gradient-to-r via-indigo-200 to-purple-300 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            Our Valued Partners
          </h1>
          <p className="text-gray-400 mt-4">
            Empowering innovation through collaboration
          </p>
        </div>

        <div className="relative h-[60vh] w-full mt-20">
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
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          
                onClick={() => setSelectedSponsor(null)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="from-blue-950/95 fixed inset-0 z-[1000] m-auto h-fit w-full max-w-2xl rounded-2xl border border-indigo-500/20 bg-gradient-to-br to-indigo-950/95 p-8 shadow-2xl backdrop-blur-md"
              >
                <button
                  onClick={() => setSelectedSponsor(null)}
                  className="text-gray-400 absolute right-4 top-4 transition-colors hover:text-white"
                >
                  ✕
                </button>
                <div className="flex flex-col items-center gap-6">
                  <div className="relative h-40 w-80 overflow-hidden rounded-xl bg-blue/10 p-4">
                    <Image
                      src={selectedSponsor.thumbnail}
                      alt={selectedSponsor.name}
                      fill
                      className="object-contain mix-blend-lighten"
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="bg-gradient-to-r from-yellow via-primary to-orange bg-clip-text text-2xl font-bold text-transparent">
                      {selectedSponsor.name}
                    </h2>
                    <p className="mt-2 text-white/70">
                      {selectedSponsor.description}
                    </p>
                    <div className="mt-6 rounded-lg bg-gradient-to-br from-blue-dark/30 to-blue-light/30 p-4">
                      <h3 className="mb-2 font-medium text-white/90">
                        Contribution to ZOTBotics
                      </h3>
                      <p className="text-white/70">
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
